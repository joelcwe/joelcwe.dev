<script lang="ts">
    import "../app.postcss";
    import Header from "../lib/components/Header.svelte";
   
    export const prerender = false;
</script>
<Header/>
<slot/>