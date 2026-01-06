<script>
    import { API_BASE } from "$lib/config";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import '../../assets/app.css';
    export const prerender = true; // Has to be static

    let email = '';
    let password = '';
    let confirmPassword = '';
    let error = null;
    let success = false;
    let loading = false;

    async function handleRegistration(event) {
        event.preventDefault();
        error = null;
        success = false;

        if (password !== confirmPassword) {
            error = 'Fel lösenord'
            return
        }

        if (password.length < 6) {
            error = "Lösenordet måste bestå av minst sex tecken";
            return;
        }

        loading = true;

        try {
            const response = await fetch(`${API_BASE}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                success = true;

                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                error = 'Registreringen misslyckades'
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            loading = false;
        }
    }
</script>

<svelte:head>
    <title>SSR Editor - registrering</title>
</svelte:head>

<Header />

<main>
    <h2>Registera användare</h2>

    {#if success}
        <div class="success" role="alert">
            Du är registrerad, omdirigerar till inloggning.
        </div>
    {/if}

    {#if error}
        <div class="error" role="alert">
            {error}
        </div>
    {/if}

    <form on:submit={handleRegistration} class="auth-form">
        <div class="form-group">
            <label for="email">E-post:</label>
            <input type="email" id="email" bind:value={email} required disabled={loading || success} placeholder="E-post"/>
        </div>

        <div class="form-group">
            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password} required disabled={loading || success} placeholder="Lösenord"/>
        </div>

        <div class="form-group">
            <label for="confirmPassword">Lösenord:</label>
            <input type="confirmPassword" id="confirmPassword" bind:value={confirmPassword} required disabled={loading || success} placeholder="Upprepa lösenord"/>
        </div>

        <button type="submit" disabled={loading || success} class="submit-btn">
            {loading ? "Registrerar..." : success ? "Registrerad!" : "Registrera"}
        </button>
    </form>

    <p class="auth-link">Har du redan ett konto? <a href="/login">logga in</a></p>
</main>

<Footer />
