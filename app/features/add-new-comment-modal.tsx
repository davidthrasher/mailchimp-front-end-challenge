import { useAtom } from "jotai/react";

import { addNewCommentModalAtom } from "~/atoms/add-new-comment-modal-atom";
import { Modal } from "~/components/modal";
export function AddNewCommentModal() {
  const [isAddNewCommentModalVisible, setIsAddNewCommentModalVisible] = useAtom(
    addNewCommentModalAtom,
  );

  return isAddNewCommentModalVisible ? (
    <Modal headerText="Add a New Comment">
      <form
        className="flex flex-col gap-4"
        method="post"
        action="/add-new-comment"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2 px-4"
          htmlFor="name"
        >
          Name
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
        </label>

        <label
          className="block text-gray-700 text-sm font-bold mb-2 px-4"
          htmlFor="message"
        >
          Comment
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="message"
            name="message"
            placeholder="Write your comment here"
            required
          />
        </label>

        <div className="flex justify-end items-center gap-2 border-t border-gray-300 p-4">
          <button
            className="bg-white hover:bg-blue-100 text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setIsAddNewCommentModalVisible(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  ) : null;
}
