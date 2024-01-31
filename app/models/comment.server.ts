import { Comment } from "@prisma/client";

import { prisma } from "~/db.server";

export function createComment({
  message,
  name,
}: Pick<Comment, "name" | "message">) {
  return prisma.comment.create({
    data: {
      message,
      name,
    },
  });
}
export function getComments() {
  return prisma.comment.findMany({
    orderBy: {
      created: "desc",
    },
  });
}

export function deleteComments() {
  return prisma.comment.deleteMany();
}

export function deleteComment({ id }: Pick<Comment, "id">) {
  return prisma.comment.delete({ where: { id } });
}
