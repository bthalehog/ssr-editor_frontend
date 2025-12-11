<script>
    import { onMount } from 'svelte';
    import '../../../assets/app.css';
    import Header from '../../../components/Header.svelte';
    import Footer from '../../../components/Footer.svelte';
    import { API_BASE } from '../../../lib/config.js';
    import { isAuth, getToken } from '../../../lib/stores/auth.js';

    let title = '';
    let content = '';
    let submits = false;
    let success = false;
    // Added auth
    let error = null;
    let $isAuth;

    isAuth.subscribe(value => {
        $isAuth = value;
    });

    async function formSubmit(event) {
        event.preventDefault();

        // For auth, added x-access to headers
        if (!$isAuth) {
            error = 'Du måste vara inloggad för att skapa eller redigera dokument';
            return;
        }

        submits = true;
        error = null;
        success = false;

        try {
            const token = getToken();
            const response = await fetch(`${API_BASE}/api/documents/create`, {
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

            const data = await response.json():

            if (response.ok) {
                console.log("Document created")
                success = true;

                // Reset form
                title = '';
                content = '';

                // Redirect
                setTimeout(() => {
                    window.location.href = '/documents';
                }, 1000);
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

    {#if !$isAuth}
        <div class="auth-required">
            <p>Du måste vara inloggad för att skapa, redigera eller ta bort dokument.</p>
            <a href="/login">Logga in</a>
        </div>
    {:else}
        {#if success}
            <p class="success">Dokument skapat</p>
        {/if}

        {#if error}
            <p class="error">Kunde inte skapa dokument, är du inloggad?</p>
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
        {/if}
</main>

<Footer />
