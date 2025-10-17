import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        const response = await fetch('http://localhost:1337/api');
    } catch (error) {
        console.error("Error in svelte router/server.js", error);
    }
};
