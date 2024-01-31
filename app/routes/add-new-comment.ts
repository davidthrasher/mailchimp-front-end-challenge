import { ActionFunctionArgs, redirect } from "@remix-run/node";

import { createComment } from "~/models/comment.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const message = body.get("message") || "";
  const name = body.get("name") || "";
  if (typeof message !== "string" || typeof name !== "string") {
    return null;
  }

  await createComment({
    message,
    name,
  });
  return redirect(`/`);
}
