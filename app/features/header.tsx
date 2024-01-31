import mclogo from "~/images/mc-logo.png";
import { useSetAtom } from "jotai/react";
import { addNewCommentModalAtom } from "~/atoms/add-new-comment-modal-atom";

export function Header() {
  const setIsAddNewCommentModalVisible = useSetAtom(addNewCommentModalAtom);
  return (
    <header className="flex items-center justify-between bg-mailchimp-yellow p-4 text-black shadow-lg">
      <h1 className="md:text-3xl font-bold flex gap-2 items-center">
        <img src={mclogo} alt="mailchimp logo" className="h-10" />
        <span>Mailchimp Comments</span>
      </h1>
      <button
        onClick={() => setIsAddNewCommentModalVisible(true)}
        className="mail-chimp-cta shadow-md hover:shadow-black"
      >
        New Comment
      </button>
    </header>
  );
}
