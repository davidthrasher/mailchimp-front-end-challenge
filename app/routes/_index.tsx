import { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { AddNewCommentModal } from "~/features/add-new-comment-modal";
import { CommentDetailButtonCard } from "~/features/comment-detail-button-card";
import { CommentDetailsModal } from "~/features/comment-details-modal";
import { DeleteAllCommentsModal } from "~/features/delete-all-comments-modal";
import { EmptyState } from "~/features/empty-state";
import { Header } from "~/features/header";
import { getComments } from "~/models/comment.server";

export const loader = async () => {
  const comments = await getComments();
  return json({ comments });
};

export const meta: MetaFunction = () => [{ title: "Mailchimp Comments" }];
export default function Index() {
  const data = useLoaderData<typeof loader>();
  const isEmptyState = data.comments.length === 0;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header shouldShowCTAButtons={!isEmptyState} />
      <main>
        {isEmptyState ? (
          <EmptyState />
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
        <DeleteAllCommentsModal />
      </main>
    </div>
  );
}
