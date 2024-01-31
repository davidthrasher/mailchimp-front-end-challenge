import { redirect } from "@remix-run/node";

import { deleteComments } from "~/models/comment.server";

export async function action() {
  await deleteComments();
  return redirect(`/`);
}
