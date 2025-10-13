<!-- DocumentCreate.svelte -->

<script>
    import { onMount } from 'svelte';
    import '../../app.css';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    let title = '';
    let content = '';
    let submits = false;

    async function formSubmit(event) {
        event.preventDefault();
        submits = true;

        try {
            const response = await fetch('http://localhost:1337/api/documents/create', {
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
    <link rel="stylesheet" href="../app.css" />
</svelte:head>

<Header />

<main>
    <h2>Skapa dokument</h2>

    <form on:submit={formSubmit} class="new-doc">
        <label for="title">Titel</label>
        <input
            type="text"
            name="title"
            bind:value={title}
            required />

        <label for="content">Innehåll</label>
        <textarea
            name="content"
            bind:value={content}
        ></textarea>

        <input
            type="submit"
            value={submits ? 'Skapar dokument..' : 'Skapa'}
            disabled={submits} 
        />
    </form>
</main>

<Footer />
