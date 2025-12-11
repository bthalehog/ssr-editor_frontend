/**
 * Session storage handler for ssr-editor (dev)
 */

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'auth_token';
const USER_KEY = 'auth_user';

function getTokenFromStorage() {
    if (!browser) return null;

    return sessionStorage.getItem(STORAGE_KEY);
}

function getUserFromStorage() {
    if (!browser) return null;

    const userStr = sessionStorage.getItem(USER_KEY);
    
    return userStr ? JSON.parse(userStr) : null;
}

// POSITIONING!
export const isAuthenticated = writable(!!getTokenFromStorage());
export const user = writable(getUserFromStorage());

export function login(authToken, userData) {
    if (!browser) return null;

    sessionStorage.setItem(STORAGE_KEY, authToken);
    sessionStorage.setItem(USER_KEY, JSON.stringify(userData));

    user.set(userData);
    isAuthenticated.set(true);
}

export function logoff() {
    if (!browser) return null;

    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(USER_KEY);

    user.set(null);
    isAuthenticated.set(false);
}

export function getToken() {
    if (!browser) return null;

    return sessionStorage.getItem(STORAGE_KEY);
}
