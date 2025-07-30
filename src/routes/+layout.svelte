<script lang="ts">
	import "../app.css";

	let { children } = $props();
	const url = children.url;
</script>

<nav class="navbar bg-base-100 shadow-sm">
	<div class="flex gap-3">
		<a href="/" class="btn btn-xl btn-neutral text-xl">Home</a>
		<a href="/survival" class="btn btn-xl btn-primary text-xl">Elimination</a>
		<a href="/players" class="btn btn-xl btn-secondary text-xl">Players</a>
	</div>
</nav>

<main
	class="flex flex-col items-center justify-center min-h-screen bg-base-200 relative page-bg"
>
	{@render children()}
</main>

<style>
	.page-bg {
		background-image: url("/thumbprint.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.big-btn {
		font-size: 4rem;
		padding-top: 3rem;
		padding-bottom: 3rem;
		border-radius: 2rem;
	}
</style>
