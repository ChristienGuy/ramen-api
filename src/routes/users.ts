import { FastifyTypeboxSchema } from "../types";

export default async function users(app: FastifyTypeboxSchema) {
  app.post("/users", {}, async (request, reply) => {
    return reply.code(200).send({
      message: "User created",
    });
  });
}
