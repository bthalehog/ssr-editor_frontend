<script>
    import { onMount } from 'svelte';
    import '../../../assets/app.css';
    import { page } from '$app/stores';
    import Header from '../../../components/Header.svelte';
    import Footer from '../../../components/Footer.svelte';
    import { API_BASE } from '../../../lib/config.js';
    import { isAuthenticated, getToken } from '$lib/stores/auth.js';

    let loading = true;
    let error = null;
    let success = false;
    let isAuth = null;

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

    onMount(async () => {
        try {
            // No auth for reading!
            const response = await fetch(`${API_BASE}/api/documents/${$page.params.id}`);
            const data = await response.json();
            
            doc = data.docs;
            title = doc.title;
            content = doc.content;
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
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
    };
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
                    <pre>{doc.content || 'Loading...'}</pre>
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
                    />

                    <label for="content">Innehåll:</label>
                    <textarea
                        id="content"
                        bind:value={content}
                        disabled={isSubmitting}
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
