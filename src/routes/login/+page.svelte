<script>
    import { onMount } from 'svelte';
    import Header from '../../components/Header.svelte';
    import Footer from '../../components/Footer.svelte';
    import { API_BASE } from '../../lib/config';
    import { login, isAuthenticated } from '$lib/stores/auth.js';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    import '../../assets/app.css';

    let email = '';
    let password = '';
    let loading = false;
    let error = null;
    let isAuth = false;

    isAuthenticated.subscribe(value => {
        isAuth = value;
    })

    async function handleLogin(event) {
        event.preventDefault();
        loading = true;

        try {
            const response = await fetch(`${API_BASE}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok && data.token) {
                error = null;

                login(data.token, {
                    email: data.email,
                    userId: data.userId
                });
                
                // window.location.href = '/documents';
                goto(`${base}/documents`)
            } else {
                error = 'Inloggningen misslyckades, försök igen';
                console.log('Inloggningen misslyckades, försök igen')
            }
        } catch (err) {
            console.error('Login error:', err);
            error = 'Inloggningen misslyckades, försök igen';
        } finally {
            loading = false;
        }
    }
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SSR-Editor - access</title>
</svelte:head>

<Header />

<main>
    <h2>Logga in</h2>
    <p>Logga in för att kunna skapa, redigera och radera dokument.</p>
    
    {#if error}
        <div class="error">
            <p>Fel under inloggning, försök igen</p>
        </div>
    {/if}

    <form on:submit={handleLogin} class="auth-form">
        <div class="form-group">
            <label for="email">E-post:</label>
            <input type="email" id="email" bind:value={email} required disabled={loading} placeholder="E-post">
        </div>

        <div class="form-group">
            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password} required disabled={loading} placeholder="Lösenord">
        </div>

        <button type="submit" disabled={loading} class="submit-btn">
            { loading ? 'Loggar in ...' : 'Logga in' }
        </button>
    </form>

    <p class="auth-link">
        Har du inget konto? <a href="{base}/register">Registrera dig</a>!
    </p>

    <p class="auth-link">
        Du kan läsa <a href="{base}/documents">dokumenten i databasen</a> som gäst.
    </p>
    
</main>

<Footer />
