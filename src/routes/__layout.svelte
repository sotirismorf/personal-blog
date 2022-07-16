<script>
	import "../app.css";
</script>

<nav>
	<a href="/">Home</a><a href="/articles">Articles</a><a href="/about"
		>About</a
	>
</nav>

<div class="max-w-2xl mx-auto">
	<slot />
</div>

<footer class="py-4">
	<p class="text-center">© 2021 Sotiris Morfakidis</p>
</footer>

<style>
	nav {
		margin-top: 20px;
		margin-bottom: 30px;
		font-size: x-large;
		width: 100%;
		text-align: center;
	}
	nav > a {
		padding: 10px;
	}
</style>
