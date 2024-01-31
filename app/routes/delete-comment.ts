import { ActionFunctionArgs, redirect } from "@remix-run/node";

import { deleteComment } from "~/models/comment.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const id = body.get("id") || "";

  if (typeof id !== "string") {
    return null;
  }
  await deleteComment({
    id,
  });
  return redirect(`/`);
}
