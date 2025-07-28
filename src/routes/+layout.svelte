<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<div
	class="flex flex-col items-center justify-center min-h-screen bg-base-200 relative page-bg"
>
	{@render children()}
</div>

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
