<script>
    import { onDestroy, onMount } from 'svelte';
    import '../../../assets/app.css';
    import { page } from '$app/stores';
    import Header from '../../../components/Header.svelte';
    import Footer from '../../../components/Footer.svelte';
    import { API_BASE } from '../../../lib/config.js';
    import { isAuthenticated, getToken, user as userStore } from '$lib/stores/auth.js';
    import { io } from 'socket.io-client';    

    let loading = true;
    let error = null;
    let success = false;
    let isAuth = null;
    let socket = null;

    isAuthenticated.subscribe(value => {
        isAuth = value;
    });

    let doc = {
        _id: '',
        title: '',
        content: ''
    };

    let title = '';
    let content = '';
    let isSubmitting = false;
    let isEditing = false;
    let isUpdating = false;

    // Comment-vars
    let comments = [];
    let selectedLine = null;
    let commentText = '';
    let showCommentForm = false;
    let user = null;

    onMount(async () => {
        try {
            // Get user
            userStore.subscribe(value => {
                user = value;
            })

            // No auth for reading!
            const response = await fetch(`${API_BASE}/api/documents/${$page.params.id}`);
            const data = await response.json();
            
            doc = data.docs;
            title = doc.title;
            content = doc.content;

            // Get comments
            const commentsResponse = await fetch(`${API_BASE}/api/documents/${$page.params.id}/comments`);
            const commentsData = await commentsResponse.json();
            comments = commentsData.comments || [];

            // Connect to backend socket
            socket = io(API_BASE);
            
            // Join doc room
            socket.emit('create', doc._id);

            // Get updates
            socket.on('doc', (data) => {
                isUpdating = true;

                if (data.html !== undefined) content = data.html;
                if (data.title !== undefined) title = data.title;

                isUpdating = false;
            });

            // Get comments (fixed to avoid duplicates)
            socket.on('comment-new', (comment) => {
                if (comment && comment._id) {
                    if (!comments.find(c => c._id && c._id.toString() === comment._id.toString())) {
                        comments = [...comments, comment];
                    }
                }
            });
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });

    onDestroy(() => {
        if (socket) {
            socket.disconnect();
        }
    });

    function startEdit() {
        if (!$isAuthenticated) {
            window.location.href = '/login';
            return;
        }
        isEditing = true;
    }

    function cancelEdit() {
        isEditing = false;
        title = doc.title;
        content = doc.content;
    }

    async function handleSubmit() {
        if (!$isAuthenticated) {
            console.error("Du måste vara inloggad för att redigera");
            return;
        }

        isSubmitting = true;
        error = null;
        success = false;

        try {
            // Get token here
            const token = getToken();
            const response = await fetch(`${API_BASE}/api/documents/update/${$page.params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({
                    title,
                    content
                })
            });

            const data = await response.json();

            if (response.ok) {
                success = true;
                doc.title = title;
                doc.content = content;
                console.log('Document updated');
                isEditing = false;
            } else {
                console.error('Update failed');
                error = data.error || 'Update failed';
            }
        } catch (error) {
            console.error('Error updating document from view /:id', error);
        } finally {
            isSubmitting = false;
        }
    }

    function handleLineClick(lineNumber) {
        if (!$isAuthenticated) {
            window.location.href = '/login';
            return;
        }

        selectedLine = lineNumber;
        showCommentForm = true;
        commentText = '';
    }

    async function handleAddComment() {
        if (!commentText.trim() || !selectedLine) return;

        try {
            const token = getToken();
            const response = await fetch(`${API_BASE}/api/documents/${$page.params.id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({
                    lineNumber: selectedLine,
                    content: commentText
                })
            });

            const data = await response.json();

            if (response.ok && data.comment) {
                if (!comments.find(c => c._id && c._id.toString() === data.comment._id?.toString())) {
                    comments = [...comments, data.comment];
                    // comments.push(data.comment)
                }

                comments = comments; // Make it refresh

                // Send to everyone by socket
                if (socket) {
                    socket.emit('comment-broadcast', {
                        _id: doc._id,
                        comment: data.comment
                    });
                }

                commentText = '';
                showCommentForm = false;
                selectedLine = null;
            } else {
                error = data.error || 'Kunde inte kommentera';
                console.error('Comment failed', data);
            }
        } catch (error) {
            console.error('Error commenting', error);
        }
    }

    function getLineContent() {
        return (doc.content || '').split('\n');
    }

    function getLineComments(lineNumber) {
        return comments.filter(c => c.lineNumber === lineNumber);
    }
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SSR-Editor</title>
</svelte:head>

<Header />

<main>
    <h2>Redigera</h2>
    {#if loading}
        <p>Hämtar dokument</p>
    {:else if error && !doc._id}
        <p class="error">Error: {error}</p>
    {:else}
        <div class="document-view">
            {#if !isEditing}
                <div class="document-header">
                    <h2>{doc.title}</h2>
                    {#if $isAuthenticated}
                        <button on:click={startEdit} class="edit-btn">Redigera</button>
                    {:else}
                        <p class="alert">Logga in för att kunna redigera</p>
                    {/if}
                </div>
                <div class="document-content">
                    <div class='document-lines'>
                        {#each getLineContent() as line, index}
                            {@const lineNum = index + 1}
                            {@const isSelected = selectedLine === lineNum}
                            
                            <div class="line-container" class:selected={isSelected}>
                                <div
                                    class="line-number"
                                    role="button"
                                    tabindex="0"
                                    on:click={() => handleLineClick(lineNum)}
                                    on:keydown={(e) => e.key === 'Enter' && handleLineClick(lineNum)}
                                >{lineNum}</div>
                                <div
                                    class="line-content"
                                    role="button"
                                    tabindex="0"
                                    on:click={() => handleLineClick(lineNum)}
                                    on:keydown={(e) => e.key === 'Enter' && handleLineClick(lineNum)}
                                >{line || ''}</div>
                                {#if $isAuthenticated}
                                    <button class="comment-btn" on:click={() => handleLineClick(lineNum)} title="Lägg till kommentar">💬</button>
                                {/if}
                                {#if getLineComments(lineNum).length > 0}
                                    <div class="line-comments">
                                        {#each getLineComments(lineNum) as comment}
                                            <div class="comment-bubble">
                                                <div class="comment-author">{comment.userEmail}</div>
                                                <div class="comment-text">{comment.content}</div>
                                                <div class="comment-time">{new Date(comment.created)}</div>
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                                {#if showCommentForm && selectedLine === lineNum}
                                    <div class="comment-form-inline">
                                        <h4>Kommentera {selectedLine}</h4>
                                        <textarea
                                            bind:value={commentText}
                                            placeholder="Kommentar"
                                            rows="3"
                                        ></textarea>
                                        <div class="comment-form-actions">
                                            <button on:click={handleAddComment} class="submit-btn">Lägg till</button>
                                            <button on:click={() => { showCommentForm = false; selectedLine = null; }} class="cancel-btn">Avbryt</button>
                                        </div>
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            {:else}
                <h2>Redigera dokument</h2>

                {#if success}
                    <p class="success">Dokument uppdaterat</p>
                {/if}

                {#if error}
                    <p class="error">Error: {error}</p>
                {/if}
       
                <form on:submit|preventDefault={handleSubmit} class="new-doc">
                    <label for="title">Titel:</label>

                    <input
                        type="text"
                        id="title"
                        bind:value={title}
                        required
                        disabled={isSubmitting}
                        on:input={(e) => {
                            if (socket && !isUpdating) {
                                socket.emit('doc', {
                                    _id: doc._id,
                                    title: e.target.value
                                });
                            }
                        }}
                    />

                    <label for="content">Innehåll:</label>
                    <textarea
                        id="content"
                        bind:value={content}
                        disabled={isSubmitting}
                        on:input={(e) => {
                            if (socket && !isUpdating) {
                                socket.emit('doc', {
                                    _id: doc._id,
                                    html: e.target.value
                                });
                            }
                        }}
                    ></textarea>

                    <div class="form-actions">
                        <button
                            type="button"
                            on:click={cancelEdit}
                            class="cancel-btn"
                            disabled={isSubmitting}
                        >
                            Avbryt
                        </button>
                        <button
                            type="submit"
                            class="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Uppdaterar...' : 'Uppdatera'}
                        </button>
                    </div>
                </form>
            {/if}
        </div>
    {/if}
</main>

<Footer />
