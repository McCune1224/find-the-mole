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

export const load: PageServerLoad = async ({}) => {
  // Fetch players from the database
  const playersList: Player[] = await getPlayers();

  return {
    players: playersList,
  };
};
