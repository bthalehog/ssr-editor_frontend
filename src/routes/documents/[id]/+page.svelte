<script>
    import { onMount } from 'svelte';
    import '../../../assets/app.css';
    import { page } from '$app/stores';
    import Header from '../../../components/Header.svelte';
    import Footer from '../../../components/Footer.svelte';
    import { API_BASE } from '../../../lib/config.js';

    // let documents = [];
    let loading = true;
    let error = null;
    let success = false;

    let doc = {
        _id: '',
        title: '',
        content: ''
    };

    let title = '';
    let content = '';
    let isSubmitting = false;

    onMount(async () => {
        try {
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

    async function handleSubmit() {
        isSubmitting = true;
        error = null;
        success = false;

        try {
            const response = await fetch(`${API_BASE}/api/documents/update/${$page.params.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content
                })
            });

            if (response.ok) {
                success = true;
                doc.title = title;
                doc.content = content;
                console.log('Document updated');
            } else {
                console.error('Update failed');
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

    {#if success}
        <p class="success">Dokument uppdaterat</p>
    {/if}

    {#if loading}
        <p>Hämtar dokument...</p>
    {:else if error}
        <p class="error">Error: {error}</p>
    {:else}
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

            <button
                type="submit"
                class="submit-btn"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Uppdaterar...' : 'Uppdatera'}
            </button>
        </form>
    {/if}
</main>

<Footer />
