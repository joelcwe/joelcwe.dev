// adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/lib/assets/js/fetchPosts.js
import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET = (async() => {
    const post: Record<string, any> = {};
    try {
        await Promise.all(
        Object.entries(import.meta.glob("/src/posts/*.{md,svx}")).map(
            async ([path, resolver]) => {
                const { metadata }: any = await resolver();
                const key = path.match(/[^/]*(?=\.\w+$)/)?.[0];
                if (key) post[key] = metadata;
            }
        )
        );
    } catch (err) {
        console.error("Error while processing blog posts:", err);
        throw error(500, { message: "Internal Server Error" });
    }

    return json(post);

}) satisfies RequestHandler;