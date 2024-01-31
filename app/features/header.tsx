import { useSetAtom } from "jotai/react";

import { addNewCommentModalAtom } from "../atoms/add-new-comment-modal-atom";
import { deleteAllCommentsModalAtom } from "../atoms/delete-all-comments-modal-atom";
import mclogo from "~/images/mc-logo.png";

export function Header({
  shouldShowCTAButtons,
}: {
  shouldShowCTAButtons: boolean;
}) {
  const setIsAddNewCommentModalVisible = useSetAtom(addNewCommentModalAtom);
  const setIsDeleteAllCommentsModalVisible = useSetAtom(
    deleteAllCommentsModalAtom,
  );

  return (
    <header className="flex items-center justify-between bg-mailchimp-yellow p-4 text-black shadow-lg">
      <h1 className="md:text-3xl font-bold flex gap-2 items-center">
        <img src={mclogo} alt="mailchimp logo" className="h-10" />
        <span className="hidden md:block">Mailchimp Comments</span>
      </h1>
      {shouldShowCTAButtons && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsDeleteAllCommentsModalVisible(true)}
            className="mail-chimp-cta bg-red-500 text-white shadow-md hover:shadow-black"
          >
            Delete All Comments
          </button>
          <button
            type="button"
            onClick={() => setIsAddNewCommentModalVisible(true)}
            className="mail-chimp-cta bg-white text-black shadow-md hover:shadow-black"
          >
            Add Comment
          </button>
        </div>
      )}
    </header>
  );
}
