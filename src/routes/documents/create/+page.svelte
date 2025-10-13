<script>
    import { onMount } from 'svelte';
    import '../../../assets/app.css';
    import Header from '../../../components/Header.svelte';
    import Footer from '../../../components/Footer.svelte';

    const API_BASE = 'http://localhost:1337'

    let title = '';
    let content = '';
    let submits = false;
    let success = false;

    async function formSubmit(event) {
        event.preventDefault();
        submits = true;

        try {
            const response = await fetch(`${API_BASE}/api/documents/create`, {
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
                console.log("Document created")

                // Reset form
                title = '';
                content = '';
            } else {
                console.error("Error creating new document")
            }
        } catch (error) {
            console.error("Error creating new document", error)
        } finally {
            submits = false;
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
    <h2>Skapa dokument</h2>

    {#if success}
        <p class="success">Dokument skapat</p>
    {/if}

    <form on:submit={formSubmit} class="new-doc">
        <label for="title">Titel</label>
        <input
            type="text"
            name="title"
            bind:value={title}
            required
            disabled={submits}
        />

        <label for="content">Innehåll</label>
        <textarea
            name="content"
            bind:value={content}
            disabled={submits}
        ></textarea>

        <input
            type="submit"
            value={submits ? 'Skapar dokument..' : 'Skapa'}
            disabled={submits} 
        />
    </form>
</main>

<Footer />
