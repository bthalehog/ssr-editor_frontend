

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CA8j7KKM.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CBBjMJIg.js","_app/immutable/chunks/sDculUIh.js"];
export const stylesheets = [];
export const fonts = [];
