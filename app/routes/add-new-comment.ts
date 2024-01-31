import { ActionFunctionArgs, redirect } from "@remix-run/node";

import { createComment } from "~/models/comment.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const message = body.get("message") || "";
  const name = body.get("name") || "";
  if (typeof message !== "string" || typeof name !== "string") {
    return null;
  }
  if (!message || !name) {
    return {
      errors:
        "Please provide a name and message that are each greater than 0 characters",
    };
  }
  await createComment({
    message,
    name,
  });
  return redirect(`/`);
}
