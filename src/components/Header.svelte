<script>
    import { goto } from '$app/navigation';
</script>

<header>
    <h1>SSR Editor</h1>
    <navigation>
        <a href="/documents" on:click|preventDefault={() => goto('ssr-editor_frontend/documents')}>Start</a>
        <a href="/documents/list" on:click|preventDefault={() => goto('ssr-editor_frontend/documents/list')}>Lista</a>
        <a href="/documents/create" on:click|preventDefault={() => goto('ssr-editor_frontend/documents/create')}>Nytt dokument</a>
    </navigation>
</header>
