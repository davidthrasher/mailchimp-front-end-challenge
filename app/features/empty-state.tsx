import { useSetAtom } from "jotai/react";

import { addNewCommentModalAtom } from "../atoms/add-new-comment-modal-atom";

export function EmptyState() {
  const setIsAddNewCommentModalVisible = useSetAtom(addNewCommentModalAtom);
  return (
    <section className="w-full p-4 md:flex md:justify-center md:items-center">
      <form className="p-4 border border-gray-300 rounded md:w-1/2 flex flex-col gap-4 justify-between shadow-xl">
        <p>
          Welcome to the Mailchimp comments application! Click the button below
          to add a comment!
        </p>
        <button
          type="button"
          onClick={() => setIsAddNewCommentModalVisible(true)}
          className="mail-chimp-cta bg-mailchimp-yellow text-black shadow-md hover:shadow-black py-4 w-full"
        >
          Add Comment
        </button>
      </form>
    </section>
  );
}
