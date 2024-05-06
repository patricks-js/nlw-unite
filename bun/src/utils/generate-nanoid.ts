import { nanoid } from "nanoid";

export function generateNanoid(): string {
  return nanoid(12);
}
