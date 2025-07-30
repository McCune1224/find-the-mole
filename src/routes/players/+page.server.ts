import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import { db } from "$lib/database";
import { players } from "$lib/schema";
import type { Player } from "$lib/types";
import {
  createPlayer,
  deletePlayer,
  getPlayers,
  updatePlayer,
} from "$lib/db/player";

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
    console.log("got player: ", form.get("name"));
    const formPlayerName = form.get("name");
    const players = await getPlayers();
    const isExistingPlayer = players.find(
      (player) => player.name === formPlayerName,
    );

    if (isExistingPlayer) {
      return {
        success: false,
        message: "Player with this name already exists.",
      };
    }
    await createPlayer(formPlayerName as string);
    return { success: true };
  },

  update: async ({ request }) => {
    const form = await request.formData();
    const playerId = form.get("id") as unknown;
    const newSafeStatus = form.get("isSafe") as unknown;

    if (!playerId) {
      return { success: false, message: "Player ID is required." };
    }

    await updatePlayer(playerId as number, {
      isSafe: newSafeStatus as boolean,
    });
    return { success: true };
  },

  delete: async ({ request }) => {
    const form = await request.formData();
    const playerId = form.get("id") as unknown;

    if (!playerId) {
      return { success: false, message: "Player ID is required." };
    }

    deletePlayer(playerId as number);
    return { success: true };
  },
};
