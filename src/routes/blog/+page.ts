import type { PageLoad } from './$types';
 
export const load = (async ({ url }) => {
    const postRes = await fetch(`${url.origin}/api/posts.json`)
    return await postRes.json()
}) satisfies PageLoad;