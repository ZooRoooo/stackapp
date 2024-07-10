import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://Idiahub_owner:CRZWy2tKeo5k@ep-quiet-mouse-a5mx8da7.us-east-2.aws.neon.tech/Idiahub?sslmode=require");
export const db = drizzle(sql,{schema});

// const result = await db.select().from(...);
