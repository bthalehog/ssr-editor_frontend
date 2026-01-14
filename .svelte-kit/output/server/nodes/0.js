

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C-wqB9fK.js","_app/immutable/chunks/BgDj0rgT.js","_app/immutable/chunks/BdBSvQfD.js"];
export const stylesheets = [];
export const fonts = [];
