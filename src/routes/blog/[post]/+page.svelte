<!-- Adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter to handle dynamic routing
    This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Giscus from '@giscus/svelte';
	import Time from 'svelte-time';
	import { onMount } from 'svelte';

	export let data;

	const { title, excerpt, publishedDate, coverWidth, coverHeight } = data.meta;
	const { PostContent } = data;

	let theme = 'light';

	onMount(() => {
		theme = localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light';
		const htmlElement = document.documentElement;
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					const classList = Array.from(htmlElement.classList);
					theme = classList.includes('dark') ? 'dark' : 'light';
				}
			});
		});

		observer.observe(htmlElement, { attributes: true });

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
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

<article class="container mx-auto max-w-2xl">
	<Heading>{title}</Heading>
	<Time timestamp={publishedDate} />
	<div class="mt-8 prose prose-stone dark:prose-invert">
		<svelte:component this={PostContent} />
	</div>

	<Giscus
		repo="joelcwe/joelcwe.dev"
		repoId="R_kgDOI-5CsA"
		category="Announcements"
		categoryId="DIC_kwDOI-5CsM4CYk3y"
		mapping="og:title"
		reactionsEnabled="1"
		emitMetadata="0"
		{theme}
		lang="en"
		loading="lazy"
	/>
</article>
