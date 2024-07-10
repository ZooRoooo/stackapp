import { text, serial, pgTable, integer, varchar as pgVarchar } from "drizzle-orm/pg-core";

export const Ideas = pgTable('ideas', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    username: text('username').notNull(),
    vote: integer('vote').default(0),
    createdAt: pgVarchar('createdAt', 255).notNull() // Define varchar with a length
});
