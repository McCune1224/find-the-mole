import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import { db } from "$lib/database";
import { players } from "$lib/schema";
import type { Player } from "$lib/types";
import { getPlayers } from "$lib/db/player";

export const load: PageServerLoad = async ({ url }) => {
  // Example: fetch data from an API or database
  // const data = await fetch('https://api.example.com/data').then(res => res.json());

  // Example: access params, locals, etc.
  // const user = locals.user;

  // const players: Player[] = await db.select().from(players);
  const players = await getPlayers();

  return {
    players: players,
    url: url.pathname,
  };
};

export const actions: Actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    console.log("Create Form data received:", form);

    // Example: get player name from form
    const name = form.get("name");
    // TODO: Add logic to create a player
    return { success: true };
  },
  delete: async ({ request }) => {
    const form = await request.formData();
    console.log("Delete Form data received:", form);
    const id = form.get("id");
    // TODO: Add logic to delete a player by id
    return { success: true };
  },
};
