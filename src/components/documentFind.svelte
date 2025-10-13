<!-- DocumentFind.svelte -->

<script>
    import { onMount } from 'svelte';
    import '../../app.css';
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    let documents = [];
    let loading = true;
    let error = null;

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:1337/api/documents');
            const data = await response.json();
            documents = data.docs;
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SSR-Editor</title>
    <link rel="stylesheet" href="../app.css" />
</svelte:head>

<Header />

<main>
    <h2>Dokument</h2>
    <p>Här är en lista över alla dokument i databasen.</p>
    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p class="error">Error: {error}</p>
    {:else}
        {#each documents as doc}
            <h3><a href="/document/{doc.id}">{doc.title}</a></h3>
        {/each}
    {/if}
</main>

<Footer />
