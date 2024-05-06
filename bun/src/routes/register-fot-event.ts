import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { nanoid } from "nanoid";
import { z } from "zod";
import { BadRequest } from "./errors/bad-request";

export async function registerForEventRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/api/events/:eventId/attendees",
    {
      schema: {
        summary: "Register an attendee",
        tags: ["attendees"],
        body: z.object({
          name: z.string().min(4),
          email: z.string().email()
        }),
        params: z.object({
          eventId: z.string().uuid()
        }),
        response: {
          201: z.object({
            attendeeId: z.string().length(12)
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params;
      const { name, email } = request.body;

      const attendeeFromEmail = await prisma.attendee.findUnique({
        where: {
          eventId_email: {
            email,
            eventId
          }
        }
      });

      if (attendeeFromEmail) {
        throw new BadRequest(
          "This e-mail is already registered on this event."
        );
      }

      const [event, amountOfAttendeeForEvent] = await Promise.all([
        prisma.event.findUnique({
          where: {
            id: eventId
          }
        }),
        prisma.attendee.count({
          where: {
            eventId
          }
        })
      ]);

      if (
        event?.maximumAttendees &&
        amountOfAttendeeForEvent >= event.maximumAttendees
      ) {
        throw new BadRequest(
          "The maximum of attendees for this event has been reached."
        );
      }

      const attendee = await prisma.attendee.create({
        data: {
          id: nanoid(12),
          name,
          email,
          eventId
        }
      });

      return reply.status(201).send({
        attendeeId: attendee.id
      });
    }
  );
}
