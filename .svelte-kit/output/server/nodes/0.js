

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DL6ac76A.js","_app/immutable/chunks/PSjntvnU.js","_app/immutable/chunks/8KGhtG1-.js"];
export const stylesheets = [];
export const fonts = [];
