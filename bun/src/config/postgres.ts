import postgres from "postgres";
import { env } from "./env";

export const pg = postgres(env.DATABASE_URL2, {
  max: 1,
  transform: {
    undefined: null
  }
});
