import { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AddNewCommentModal } from "~/features/add-new-comment-modal";
import { getComments } from "~/models/comment.server";

import { CommentDetailButtonCard } from "~/components/comment-detail-button-card";
import { Header } from "~/features/header";
import { CommentDetailsModal } from "~/features/comment-details-modal";

export const loader = async () => {
  const comments = await getComments();
  return json({ comments });
};

export const meta: MetaFunction = () => [{ title: "Mailchimp Comments" }];
export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main>
        {data.comments.length === 0 ? (
          <p className="p-4">No comments yet</p>
        ) : (
          <ul className="grid gap-4 md:grid-cols-3 md:auto-rows-fr p-4">
            {data.comments.map((comment) => (
              <CommentDetailButtonCard
                key={comment.id}
                id={comment.id}
                message={comment.message}
                name={comment.name}
                createdAt={comment.created}
              />
            ))}
          </ul>
        )}
        <AddNewCommentModal />
        <CommentDetailsModal />
      </main>
    </div>
  );
}
