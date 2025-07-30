<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { createPlayerStore } from "$lib/stores/player";
  import { enhance } from "$app/forms";
  import type { PageProps } from "./$types";
  let { data, form }: PageProps = $props();

  let name = $state<string>("");
  // const playerStore = createPlayerStore();
  // data.players.forEach((player) => {
  // 	playerStore.add(player.name);
  // });
</script>

<section class="container mx-auto p-4">
  {#if form?.success == false}
    <p class="error bg-error text-2xl mx-auto text-center py-3">
      ERROR: {form.message}
    </p>
  {/if}
  <div class="flex items-center justify-center py-8">
    <div
      class="bg-black border-2 border-green-500 rounded-lg shadow-xl p-8 w-11/12 sm:w-3/4 md:w-1/2 h-auto"
    >
      <form method="POST" action="?/create" use:enhance>
        <span
          class="text-6xl font-mono font-bold text-green-400 mb-4 text-center"
        >
          NEW PLAYER</span
        >
        <input
          type="text"
          name="name"
          bind:value={name}
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

  <h1
    class="text-4xl font-extrabold mb-12 text-center bg-black px-4 py-4 rounded"
  >
    Current Players
  </h1>

  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.players as player (player.id)}
      <li
        in:fly={{ y: 20 }}
        out:fade
        class={"card card-bordered shadow-lg bg-black border" +
          (player.isSafe ? " border-success" : " border-error")}
      >
        <div class="card-body">
          <h2
            class={"text-2xl card-title  font-mono" +
              (player.isSafe ? " text-success" : " text-error")}
          >
            {player.name}
          </h2>
          <div class="card-actions justify-end mx-auto gap-8">
            <form method="POST" action="?/update" use:enhance>
              <input type="hidden" name="id" value={player.id} />
              <button
                disabled={player.isSafe}
                name="isSafe"
                value="true"
                type="submit"
                class="btn btn-success btn-soft border">Pass</button
              >
              <button
                disabled={!player.isSafe}
                name="isSafe"
                value="false"
                type="submit"
                class="btn btn-error btn-soft border">Fail</button
              >
            </form>
            <form method="POST" action="?/delete" use:enhance>
              <input type="hidden" name="id" value={player.id} />
              <button class="btn btn-info"> Delete </button>
            </form>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</section>
