export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "ssr-editor_frontend/_app",
	assets: new Set(["404.html","_redirects","favicon.png"]),
	mimeTypes: {".html":"text/html",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B3Dd5XJU.js",app:"_app/immutable/entry/app.zGS_hphJ.js",imports:["_app/immutable/entry/start.B3Dd5XJU.js","_app/immutable/chunks/CpGnfJWM.js","_app/immutable/chunks/Cx3WVP6-.js","_app/immutable/chunks/CBBjMJIg.js","_app/immutable/chunks/C7khA3dF.js","_app/immutable/chunks/sDculUIh.js","_app/immutable/chunks/DRzG5ckh.js","_app/immutable/entry/app.zGS_hphJ.js","_app/immutable/chunks/CBBjMJIg.js","_app/immutable/chunks/Cx3WVP6-.js","_app/immutable/chunks/C7khA3dF.js","_app/immutable/chunks/sDculUIh.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D-GSKBDf.js","_app/immutable/chunks/f9JMYk7F.js","_app/immutable/chunks/DRzG5ckh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
