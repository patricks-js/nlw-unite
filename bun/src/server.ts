import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify, { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
import { env } from "./config/env";
import { errorHandler } from "./error-handler";
import { checkInRoute } from "./routes/check-in";
import { createEventRoute } from "./routes/create-event";
import { getAttendeeBadgeRoute } from "./routes/get-attendee-badge";
import { getEventRoute } from "./routes/get-event";
import { getEventAttendeesRoute } from "./routes/get-event-attendees";
import { registerForEventRoute } from "./routes/register-fot-event";

const app = Fastify({
  logger: true
});

app.register(fastifySwagger, {
  openapi: {
    openapi: "3.1.0",
    info: {
      title: "pass.in",
      description:
        "Especificações da API do pass.in construída durante o NWL Unite da Rocketseat.",
      version: "0.1.0"
    },
    servers: [
      {
        url: "http://localhost:3333",
        description: "Development server"
      }
    ],
    tags: [
      { name: "events", description: "Events related end-points" },
      { name: "attendees", description: "Attendees related end-points" },
      { name: "check-in", description: "Check-ins related end-points" }
    ],
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here"
    }
  },
  transform: jsonSchemaTransform
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});

app.register(fastifyCors, {
  origin: "*"
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEventRoute);
app.register(registerForEventRoute);
app.register(getEventRoute);
app.register(getEventAttendeesRoute);
app.register(getAttendeeBadgeRoute);
app.register(checkInRoute);

app.setErrorHandler(errorHandler);

try {
  await app.listen({ port: env.PORT, host: "0.0.0.0" });
  console.log("HTTP server running!");
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
