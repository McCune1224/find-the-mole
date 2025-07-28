<script lang="ts">
	let name = "";
	let score = 0;
	function handleSubmit() {
		alert(`Submitted: ${name}`);
	}
</script>

<div class="card mx-auto bg-base-100 shadow-xl m-2">
	<div class="card-body items-center text-center">
		<h2 class="card-title text-primary">Add New Player</h2>
		<div class="mt-4 flex flex-col gap-2 w-full">
			<input
				class="input input-bordered w-full"
				type="text"
				placeholder="Player Name"
				bind:value={name}
			/>
			<button class="btn btn-primary mt-2 w-full" on:click={handleSubmit}>
				Add Player
			</button>
		</div>
	</div>
</div>
