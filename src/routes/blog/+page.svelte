<script lang='ts'>
    import type { PageData } from "./$types";
    import Time from "svelte-time";
    import { Card } from "flowbite-svelte";
    export let data: PageData
</script>
<div class="flex items-center justify-center">
<div class="grid xs:grid-cols-1 md:grid-cols-3 gap-4 p-5" >
    {#each Object.entries(data) as [path,post] }
        <Card href="/blog/{path}">
            <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <span class="mb-2 text-xs font-thin"><Time timestamp={post.publishedDate}/></span>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{post.excerpt}</p>
        </Card>
    {/each}
</div>
</div>