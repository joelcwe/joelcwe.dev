<script lang="ts">
    import "../app.postcss";
    import Header from "../lib/components/Header.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData

    export const prerender = false;
</script>
<!-- <svelte:head>
    <title>{data?.title}</title>
    <meta property="og:site_name" content={data?.title} />
</svelte:head> -->
<Header/>
<slot/>