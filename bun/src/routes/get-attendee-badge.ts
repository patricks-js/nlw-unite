import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { BadRequest } from "./errors/bad-request";

export async function getAttendeeBadgeRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/api/attendees/:attendeeId/badge",
    {
      schema: {
        summary: "Get badge attendee",
        tags: ["attendees"],
        params: z.object({
          attendeeId: z.string().length(12)
        })
      }
    },
    async (request, reply) => {
      const { attendeeId } = request.params;

      const attendee = await prisma.attendee.findUnique({
        select: {
          name: true,
          email: true,
          event: {
            select: {
              title: true
            }
          }
        },
        where: {
          id: attendeeId
        }
      });

      if (!attendee) {
        throw new BadRequest("Attendee not found");
      }

      const baseURL = `${request.protocol}://${request.hostname}`;

      const checkInURL = new URL(`/attendees/${attendeeId}/check-in`, baseURL);

      return reply.send({
        badge: {
          name: attendee.name,
          email: attendee.email,
          eventTitle: attendee.event.title,
          checkInUrl: checkInURL.toString()
        }
      });
    }
  );
}
