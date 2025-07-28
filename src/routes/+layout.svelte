<script lang="ts">
	import "../app.css";

	let { children } = $props();
	const url = children.url;
</script>

<nav>
	<div class="flex flex-row justify-between w-full items-center px-4 py-2">
		<div class="text-lg font-bold">
			{url}
		</div>
		<a href="/" class="btn big-btn btn-accent mr-auto">Home</a>
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
		font-size: 2.5rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
</style>
