import { db } from "$lib/database";
import { players } from "$lib/schema";

export async function createPlayer(name: string) {
  const [player] = await db.insert(players).values({ name }).returning();
  return player;
}

export async function getPlayer(id: number) {
  return db.select().from(players).where(players.id.eq(id)).limit(1);
}

export async function getPlayers() {
  return db.select().from(players);
}

export async function updatePlayer(id: number, data: { name?: string }) {
  const [player] = await db
    .update(players)
    .set(data)
    .where(players.id.eq(id))
    .returning();
  return player;
}

export async function deletePlayer(id: number) {
  const [player] = await db
    .delete(players)
    .where(players.id.eq(id))
    .returning();
  return player;
}
