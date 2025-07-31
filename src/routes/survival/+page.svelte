<script lang="ts">
	let playerName = $state<string>("");

	let { data } = $props();

	// overlayBg can be 'none', 'red', 'green'
	let overlayBg: "none" | "red" | "green" = $state<"none" | "red" | "green">(
		"none",
	);
	let loading = $state<boolean>(false);

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function handleSubmit() {
		loading = true;
		await delay(5000);
		loading = false;
		const player = data.players.find(
			(p) => p.name.toLowerCase() === playerName.toLowerCase(),
		);
		if (player === undefined) {
			overlayBg = "none";
			playerName = ""; // Clear the input field
			return;
		}

		if (player.isSafe) {
			overlayBg = "green";
		} else {
			overlayBg = "red";
		}
		// Set a timeout to hide the overlay after 5 seconds
		setTimeout(() => {
			overlayBg = "none";
			playerName = ""; // Clear the input field
		}, 3500);
	}
</script>

{#if overlayBg !== "none"}
	<div class={`fade-bg-${overlayBg} bg-overlay`}></div>
{/if}

<div class="z-10 flex flex-col items-center justify-center w-screen h-screen">
	{#if loading}
		<div
			class="inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 rounded-lg"
		>
			<h2
				class="text-7xl font-extrabold text-green-400 mb-8 tracking-wider animate-pulse"
			>
				{"Checking" + "\n" + playerName + "... "}
			</h2>
		</div>
	{/if}
	<div
		class="relative bg-black border-2 border-green-500 rounded-lg shadow-xl p-8 w-11/12 sm:w-3/4 md:w-1/2 h-auto"
	>
		<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-6">
			<span
				class="text-6xl font-mono font-bold text-green-400 mb-4 text-center"
			>
				$ PLAYER</span
			>
			<input
				type="text"
				disabled={overlayBg !== "none" || loading}
				bind:value={playerName}
				class="input input-xl input-bordered w-full font-mono text-2xl bg-black text-green-400 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
				required
			/>
			<!-- <button -->
			<!-- 	type="submit" -->
			<!-- 	class="btn btn-lg bg-green-600 text-black hover:bg-green-700 w-full text-2xl font-mono font-bold tracking-wide shadow-md" -->
			<!-- > -->
			<!-- 	ACCESS -->
			<!-- </button> -->
		</form>
	</div>
</div>

<style>
	.bg-overlay {
		z-index: 1 !important;
	}
	.fade-bg-red {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(220, 38, 38, 0.7); /* Tailwind's red-600 with opacity */
		pointer-events: none;
		z-index: 1;
		animation: fadeInRedBg 0.6s ease-in;
	}
	.fade-bg-green {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(34, 197, 94, 0.7); /* Tailwind's green-500 with opacity */
		pointer-events: none;
		z-index: 1;
		animation: fadeInGreenBg 0.6s ease-in;
	}
	@keyframes fadeInRedBg {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeInGreenBg {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
