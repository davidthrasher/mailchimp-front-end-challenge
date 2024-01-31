import { useAtom } from "jotai/react";

import { commentDetailsModalAtom } from "~/atoms/comment-details-modal-atom";
import { Modal } from "~/components/modal";
export function CommentDetailsModal() {
  const [commentDetails, setCommentDetails] = useAtom(commentDetailsModalAtom);
  const { message, name, createdAt, id } = commentDetails.details;

  return commentDetails.isVisible ? (
    <Modal headerText="Comment Details">
      <div className="flex flex-col gap-4 justify-evenly">
        <p className="px-4">{message}</p>
        <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center bg-white border-t border-gray-300 p-4 sticky bottom-0">
          <div className="italic font-extralight text-sm">
            <p>{`By: ${name} on ${new Date(createdAt).toLocaleDateString(
              "en-us",
            )} at ${new Date(createdAt).toLocaleTimeString("en-us", {
              formatMatcher: "best fit",
            })}`}</p>
            <p>{`Post ID: ${id}`}</p>
          </div>
          <form className="flex gap-2" method="post" action="/delete-comment">
            <button
              className="bg-white hover:bg-blue-100 text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() =>
                setCommentDetails({
                  isVisible: false,
                  details: { id: "", name: "", message: "", createdAt: "" },
                })
              }
            >
              Close
            </button>
            <input type="hidden" name="id" value={id} />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </Modal>
  ) : null;
}
