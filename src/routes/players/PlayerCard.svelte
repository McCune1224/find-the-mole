<script lang="ts">
	import type { Player } from "$lib/types";

	export let player: Player;
	// export let onPass: () => void;
	// export let onFail: () => void;
</script>

<div class="card bg-neutral text-neutral-content w-96">
	<div class="card-body items-center text-center">
		<h2 class={"card-title " + player.isSafe ? "text-success" : "text-error"}>
			{player.name}
		</h2>
		<div class="card-actions justify-end">
			<button class="btn btn-success">Pass</button>
			<button class="btn btn-error">Fail</button>
		</div>
	</div>
</div>
