<script lang="ts">
	import { createPlayerStore } from "$lib/stores/player";
	import type { PageProps } from "./$types";
	import NewPlayerCard from "./NewPlayerCard.svelte";
	import PlayerCard from "./PlayerCard.svelte";
	let { data }: PageProps = $props();
	const playerStore = createPlayerStore();
	// data.players.forEach((player) => {
	// 	playerStore.addPlayer(player);
	// });
</script>

<div class="text-center mb-4">
	<NewPlayerCard />
	<div class="flex flex-wrap justify-center">
		{#each $playerStore as player, index (player.id)}
			<PlayerCard {player} {index} on:update={(e) => {}} />
		{/each}
	</div>
</div>
