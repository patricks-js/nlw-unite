import type { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { BadRequest } from "./routes/errors/bad-request";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }

  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: error.flatten().fieldErrors
    });
  }

  return reply
    .status(500)
    .send({ message: "Internal Server Error", error: error.message });
};
