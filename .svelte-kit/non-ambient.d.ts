
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/documents" | "/documents" | "/documents/create" | "/documents/list" | "/documents/[id]";
		RouteParams(): {
			"/documents/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/api": Record<string, never>;
			"/api/documents": Record<string, never>;
			"/documents": { id?: string };
			"/documents/create": Record<string, never>;
			"/documents/list": Record<string, never>;
			"/documents/[id]": { id: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/documents" | "/api/documents/" | "/documents" | "/documents/" | "/documents/create" | "/documents/create/" | "/documents/list" | "/documents/list/" | `/documents/${string}` & {} | `/documents/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/404.html" | "/favicon.png" | string & {};
	}
}