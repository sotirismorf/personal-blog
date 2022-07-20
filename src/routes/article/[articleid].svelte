<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import Card from "$lib/Card.svelte";
	import markdownOptions from "$lib/markdown/markdownOptions";
	//import markdownOptions from "$lib/markdown/markdownOptions";

	export let post: App.blogPost
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<Card>
	<h1 class="text-3xl italic mb-4">{post.title}</h1>
	<SvelteMarkdown
		source={post.body}
		renderers={markdownOptions}
	/>
</Card>
