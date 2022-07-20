<script lang="ts">
	import Card from "$lib/Card.svelte";
	import AsciiArt from "$lib/AsciiArt.svelte";
	import articles from "../articles/data.json";
</script>

<svelte:head>
	<title>Sotiris' blog</title>
</svelte:head>

<Card>
	<AsciiArt />
	<div class="sm:float-right sm:-translate-y-72">
		<h1 class="text-6xl sm:mt-6 mb-6">Welcome :)</h1>
		<h2 class="text-2xl sm:active:bg-orange">
			Check out my
			<div class="inline">
			<a 
				class="underline font-bold
				text-transparent bg-clip-text 
				bg-gradient-to-tr from-orange to-green
				active:italic
				sm:hover:italic"
				href="/about">portfolio

			</a>
			</div>
		</h2>
		<h2 class="text-2xl">
			...or one of my
			<a 
				class="underline font-bold
				text-transparent bg-clip-text 
				bg-gradient-to-tr from-orange to-green
				active:italic
				sm:hover:italic"
				href="/articles">articles

			</a>
		</h2>
	</div>
</Card>

<h3 class="text-4xl italic mb-5 font-bold drop-shadow-2xl shadow-black">
	Recent Stuff
</h3>

{#each articles as item}
	<Card>
		<p class="text-2xl">
			<a class="hover:underline" href="/article/{item.slug}"
				>{item.title}</a
			>
		</p>
	</Card>
{/each}
