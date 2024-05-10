import { randomUUID } from "node:crypto";
import { pg } from "@/config/postgres";

type Input = {
  title: string;
  details?: string | null;
  slug: string;
  maximumAttendees?: number | null;
};

type Output = {
  title: string;
  details: string;
  slug: string;
  maximumAttendees: number;
};

export class EventRepository {
  async create(input: Input): Promise<string> {
    const { title, details, slug, maximumAttendees } = input;

    const events: [{ id: string }] = await pg /*sql*/`
      INSERT INTO tb_events
        (id, title, details, slug, maximum_attendees)
      VALUES
        (${randomUUID()}, ${title}, ${details ?? null}, ${slug}, ${
          maximumAttendees ?? null
        })
      RETURNING id
    `;

    return events[0].id;
  }

  async findBySlug(slug: string): Promise<Output | null> {
    const [query]: [Output] = await pg /*sql*/`
      SELECT * FROM tb_events AS e WHERE e.slug LIKE ${slug}
    `;

    return query;
  }

  async getAll(): Promise<Output[]> {
    return pg`SELECT * FROM tb_events`;
  }
}
