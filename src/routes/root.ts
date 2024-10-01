import { Type } from "@sinclair/typebox";
import { FastifyTypeboxSchema } from "../types";

export default async function root(app: FastifyTypeboxSchema) {
  app.get(
    "/hello",
    {
      schema: {
        response: {
          200: Type.Object({
            message: Type.String({
              examples: ["Hello World"],
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      return reply.code(200).send({
        message: "Hello World",
      });
    }
  );
}
