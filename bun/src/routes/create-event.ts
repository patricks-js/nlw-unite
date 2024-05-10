import { EventRepository } from "@/infra/database/repositories/event-repository";
import { generateSlug } from "@/utils/generate-slug";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { BadRequest } from "./errors/bad-request";

export async function createEventRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/api/events",
    {
      schema: {
        summary: "Create an event",
        tags: ["events"],
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable()
        })
      }
    },
    async function handler(request, reply) {
      const { title, details, maximumAttendees } = request.body;

      const slug = generateSlug(title);

      const repo = new EventRepository();

      const eventWithSameSlug = await repo.findBySlug(slug);

      if (eventWithSameSlug) {
        throw new BadRequest("Invalid title.");
      }

      const id = await repo.create({
        title,
        details,
        maximumAttendees,
        slug
      });

      return reply.status(201).send({
        eventId: id
      });
    }
  );
}
