export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ssr-editor_frontend/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Drh5J4Ic.js",app:"_app/immutable/entry/app.Clgk1_Qa.js",imports:["_app/immutable/entry/start.Drh5J4Ic.js","_app/immutable/chunks/DMpseGQf.js","_app/immutable/chunks/C--EXBPb.js","_app/immutable/chunks/DZm4wIEF.js","_app/immutable/chunks/DJNdyps-.js","_app/immutable/chunks/DkvNNDwX.js","_app/immutable/chunks/Bdp2eOd4.js","_app/immutable/entry/app.Clgk1_Qa.js","_app/immutable/chunks/DZm4wIEF.js","_app/immutable/chunks/C--EXBPb.js","_app/immutable/chunks/DJNdyps-.js","_app/immutable/chunks/DkvNNDwX.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/vD9QUtaX.js","_app/immutable/chunks/DFrMXiLK.js","_app/immutable/chunks/Bdp2eOd4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
