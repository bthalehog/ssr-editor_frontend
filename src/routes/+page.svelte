<script>
    import { onMount } from 'svelte';
    import '../assets/app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import { API_BASE } from '../lib/config';
    import { base } from '$app/paths';

    let documents = [];
    let loading = true;
    let error = null;

    onMount(async () => {        
        try {
            const response = await fetch(`${API_BASE}/api`);
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
</svelte:head>

<Header />

<main>
    <h2>Dokumentdatabasen</h2>
    <p>Den här dokumentdatabasen kan användas för att skapa, redigera, läsa, radera dokument. Använd menyvalen för att fortsätta.</p>
    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p class="error">Error: {error}</p>
    {:else}
        {#each documents as doc}
            <h3><a href="{base}/documents/{doc._id}">{doc.title}</a></h3>
        {/each}
    {/if}
</main>

<Footer />
