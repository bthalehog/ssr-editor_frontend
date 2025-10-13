<!-- DocumentView.svelte -->

<script>
    import { onMount } from 'svelte';
    import '../app.css'
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import { preventDefault } from 'svelte/legacy';

    let documents = [];
    let loading = true;
    let error = null;

    let doc = {
        id: '',
        title: '',
        content: ''
    };

    let title = '';
    let content = '';
    let isSubmitting = false;

    onMount(async () => {
        try {
            const pathComponents = window.location.pathname.split('/');
            console.log(pathComponents);

            const docId = pathComponents[pathComponents.length - 1];
            console.log(pathComponents);

            const response = await fetch(`http://localhost:1337/api/documents/${docId}`);
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

        try {
            const response = await fetch(`/api/documents/update/${doc.id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content
                })
            });

            if (response.ok) {
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
    <link rel="stylesheet" href="../app.css" />
</svelte:head>

<Header />

<main>
    <h2>${doc.id}</h2>

    <form on:submit|preventDefault={handleSubmit} class="new-doc">
        <label for="title"></label>
    </form>

    <input
        type="text"
        id="title"
        bind:value={title}
        required
        disabled={isSubmitting}
    />

    <label for="content"></label>
    <textarea
        id="content"
        bind:value={content}
        disabled={isSubmitting}
    ></textarea>

    <button
        type="submit"
        class="submit-btn"
    >
    {isSubmitting ? 'Uppdaterar...' : 'Uppdatera'}
    </button>
    
    {#if loading}
        <p>Hämtar dokument...</p>
    {:else if error}
        <p class="error">Error: {error}</p>
    {/if}
</main>

<Footer />
