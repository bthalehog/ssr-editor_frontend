export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ssr-editor_frontend/_app",
	assets: new Set(["404.html","favicon.png"]),
	mimeTypes: {".html":"text/html",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B0oWMcd3.js",app:"_app/immutable/entry/app.DNfzPTwc.js",imports:["_app/immutable/entry/start.B0oWMcd3.js","_app/immutable/chunks/B5-CyFWE.js","_app/immutable/chunks/z7pBWdeW.js","_app/immutable/chunks/kK4zQf0V.js","_app/immutable/chunks/B77Urwux.js","_app/immutable/entry/app.DNfzPTwc.js","_app/immutable/chunks/kK4zQf0V.js","_app/immutable/chunks/z7pBWdeW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BdqynIpO.js","_app/immutable/chunks/Bq28Yame.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/documents",
				pattern: /^\/api\/documents\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/documents/_server.js'))
			},
			{
				id: "/documents",
				pattern: /^\/documents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/documents/create",
				pattern: /^\/documents\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/documents/list",
				pattern: /^\/documents\/list\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/documents/[id]",
				pattern: /^\/documents\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
