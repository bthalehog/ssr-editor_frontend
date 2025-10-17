import { json } from '@sveltejs/kit';
import { API_BASE } from '$lib/config';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        const response = await fetch(`${API_BASE}/api`);
        const data = await response.json();
        
        return json(data);
    } catch (error) {
        console.error("Error in svelte router/server.js", error);
        return json({ error: "Could not fetch doc/server debug in server.js"})
    }
};
