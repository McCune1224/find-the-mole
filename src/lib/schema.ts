import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isSafe: boolean("is_safe").default(true).notNull(),
});
