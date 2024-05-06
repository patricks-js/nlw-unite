import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { nanoid } from "nanoid";
import { z } from "zod";
import { BadRequest } from "./errors/bad-request";

export async function checkInRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/api/attendees/:attendeeId/check-in",
    {
      schema: {
        summary: "Check-in an attendee",
        tags: ["check-in"],
        params: z.object({
          attendeeId: z.string().length(12)
        })
      }
    },
    async (request, reply) => {
      const { attendeeId } = request.params;

      const attendeeCheckIn = await prisma.checkIn.findUnique({
        where: {
          attendeeId
        }
      });

      if (attendeeCheckIn) {
        throw new BadRequest("Attendee already checked in!");
      }

      await prisma.checkIn.create({
        data: {
          id: nanoid(12),
          attendeeId
        }
      });

      return reply.status(201).send();
    }
  );
}
