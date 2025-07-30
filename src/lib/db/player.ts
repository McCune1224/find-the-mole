import { db } from "$lib/database";
import { eq } from "drizzle-orm";
import { players } from "$lib/schema";

export async function createPlayer(name: string) {
  const [player] = await db
    .insert(players)
    .values({ name, isSafe: true })
    .returning();
  return player;
}

export async function getPlayer(id: number) {
  return db.select().from(players).where(eq(players.id, id)).limit(1);
}

export async function getPlayers() {
  return db.select().from(players).orderBy(players.id);
}

export async function updatePlayer(
  id: number,
  data: { name?: string; isSafe?: boolean },
) {
  const [player] = await db
    .update(players)
    .set(data)
    .where(eq(players.id, id))
    .returning();
  return player;
}

export async function deletePlayer(id: number) {
  const [player] = await db
    .delete(players)
    .where(eq(players.id, id))
    .returning();
  return player;
}
