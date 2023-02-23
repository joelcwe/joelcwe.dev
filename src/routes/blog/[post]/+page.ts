/** Adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter to handle dynamic routing */
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	try {	
		const post = await import(`../../../routes/blog/${params.post}.svx`)
		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		console.log(err);
		throw error(404, {
			message: 'Not found'
		  });
	}
}) satisfies PageLoad;