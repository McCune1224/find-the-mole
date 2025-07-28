<script lang="ts">
	let playerName = "";
	function handleSubmit() {
		// Replace with your submit logic
		alert(`Submitted: ${playerName}`);
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
	<div
		class="bg-gray-800 mx-auto border-4 border-yellow-400 rounded-xl shadow-2xl p-12 w-full max-w-lg"
	>
		<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-8">
			<input
				type="text"
				bind:value={playerName}
				class="input input-lg input-bordered w-full font-mono text-xl bg-gray-700 text-yellow-200 border-yellow-400 focus:outline-none focus:border-yellow-500"
				required
			/>
			<button
				type="submit"
				class="btn btn-lg btn-warning w-full text-2xl font-bold tracking-widest shadow-lg"
			>
				SUBMIT
			</button>
		</form>
	</div>
</div>
