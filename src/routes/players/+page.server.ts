import type { PageServerLoad } from "./$types";
import { db } from "$lib/database";
import { players } from "$lib/schema.ts";
import { Player } from "$lib/types.ts";
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
