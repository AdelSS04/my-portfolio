import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const angularApp = new AngularAppEngine();

/**
 * This is a request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(async (req: Request) => {
	const res = await angularApp.handle(req);
	return res ?? new Response('Page not found.', { status: 404 });
});

// Export for Cloudflare Workers with proper static asset handling
export default { 
	fetch: async (request: Request, env: any) => {
		const url = new URL(request.url);
		const pathname = url.pathname;
		
		// Handle static assets first (CSS, JS, images, fonts, etc.)
		if (pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|webmanifest|jfif)$/i)) {
			// Try to serve from the ASSETS binding first
			if (env && env.ASSETS) {
				try {
					const asset = await env.ASSETS.fetch(request);
					if (asset.status !== 404) {
						// Add proper cache headers for static assets
						const response = new Response(asset.body, {
							status: asset.status,
							statusText: asset.statusText,
							headers: {
								...asset.headers,
								'Cache-Control': 'public, max-age=31536000', // 1 year cache
							} 
						});
						return response;
					}
				} catch (error) {
					 console.error('Error serving static asset:', error);
				}
			}
		}
		
		// For all other requests (pages, API routes, etc.), use Angular SSR
		return reqHandler(request);
	}
};