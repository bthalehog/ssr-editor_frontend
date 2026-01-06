<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<header>
    <h1>SSR Editor</h1>
    <navigation>
        <a href="{base}/documents">Start</a>
        <a href="{base}/documents/list"> Lista</a>
        <a href="{base}/documents/create"> Nytt dokument</a>
        <a href="{base}/login"> Logga in</a>
    </navigation>
</header>
