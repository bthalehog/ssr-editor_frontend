const isDevelopment = typeof window !== 'undefined' && window.location.hostname === 'localhost';

export const API_BASE = isDevelopment
    ? 'http://localhost:1337'
    : 'jsramverk-editor-alhf24.azurewebsites.net';

export const config = {
    API_BASE,
    isDevelopment
}
