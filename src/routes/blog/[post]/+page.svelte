<!-- Adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter to handle dynamic routing
    This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import Time, { svelteTime } from "svelte-time";
    import { dayjs } from "svelte-time";

    export let data
    
    const {
        title,
        excerpt,
        publishedDate,
        coverWidth,
        coverHeight,
    } = data.meta
    const {PostContent} = data
    </script>
    
    
    <svelte:head>
        <!-- Be sure to add your image files and un-comment the lines below -->
        <title>{title}</title>
        <meta data-key="description" name="description" content="{excerpt}">
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:description" content={excerpt} />
        <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
        <meta property="og:image:width" content={coverWidth} />
        <meta property="og:image:height" content={coverHeight} />
        <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
    </svelte:head>
    
    
<article class="container mx-auto mt-32 max-w-2xl ">  
    <Heading>{title}</Heading>
    <Time timestamp={publishedDate}/>
    <div class= "mt-8  prose prose-stone dark:prose-invert">
        <svelte:component this={PostContent}/>
    </div>
</article>