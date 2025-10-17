

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Bm51h-0p.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BSbxloCe.js"];
export const stylesheets = [];
export const fonts = [];
