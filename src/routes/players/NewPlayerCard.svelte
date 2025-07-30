<script lang="ts">
	import { enhance } from "$app/forms";
	let name = "";
	let score = 0;
	function handleSubmit() {
		const form = new FormData();
		form.append("name", name);
		form.append("score", score.toString());
		fetch("/players", {
			method: "POST",
			body: form,
		}).then((response) => {
			if (response.ok) {
				alert("Player added successfully!");
			} else {
				alert("Error submitting player.");
			}
		});
	}
</script>

<div class="card mx-auto bg-base-100 shadow-xl m-2">
	<div class="card-body items-center text-center">
		<h2 class="card-title text-primary">Add New Player</h2>
		<form
			method="POST"
			action="?/create"
			use:enhance
			class="mt-4 flex flex-col gap-2 w-full"
		>
			<input
				class="input input-bordered w-full"
				type="text"
				name="name"
				placeholder="Player Name"
				bind:value={name}
				required
			/>
			<button
				class="btn btn-primary mt-2 w-full"
				type="submit"
				name="create"
				value="1"
			>
				Add Player
			</button>
		</form>
	</div>
</div>
