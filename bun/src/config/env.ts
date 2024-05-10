import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DATABASE_URL: z.string().url().min(1),
  DATABASE_URL2: z.string().url().min(1)
});

export const env = envSchema.parse(Bun.env);
