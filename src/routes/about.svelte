<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<Card>
	<h1 class="text-4xl">Sotiris Morfakidis</h1>
	<h2 class="text-2xl italic my-2">Software Enthusiast</h2>
	<p>
		I am interested in Free and Open Source software, right to repair and
		user experience. I like software that is simple to use, easy to
		understand and scalable.
	</p>
	<h3>Studies:</h3>
	<p>
		I study Electrical and Computer Engineering at
		<a href="https://ee.auth.gr">Aristotle University of Thessaloniki</a>
	</p>
	<h3>Projects:</h3>
	<p>
		<a href="/article/thmmy">Forum app with file sharing capabilities,
		used for note sharing in uni</a>
	</p>
	<p>
		<a href="/article/thmmy">My minimal configuration of Arch Linux</a>
	</p>
	<h3>Find me on:</h3>
	<ul class="text-lg list-disc pl-8">
		<li><a href="https://github.com/sotirismorf">Github</a></li>
	</ul>
</Card>

<style lang="postcss">
	h3 {
		@apply text-2xl italic mt-4;
	}

	p {
		@apply text-lg;
	}

	a {
		text-decoration: underline;
	}

	a:hover {
		@apply text-orange;
	}
</style>
