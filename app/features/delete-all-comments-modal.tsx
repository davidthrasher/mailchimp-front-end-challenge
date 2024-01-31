import { useAtom } from "jotai/react";

import { deleteAllCommentsModalAtom } from "~/atoms/delete-all-comments-modal-atom";
import { Modal } from "~/components/modal";
export function DeleteAllCommentsModal() {
  const [isDeleteAllCommentsModalVisible, setIsDeleteAllCommentsModalVisible] =
    useAtom(deleteAllCommentsModalAtom);

  return isDeleteAllCommentsModalVisible ? (
    <Modal headerText="Are you sure you want to delete all comments?">
      <form
        className="flex flex-col gap-4"
        method="post"
        action="/delete-all-comments"
      >
        <div className="flex justify-end items-center gap-2 border-t border-gray-300 p-4">
          <button
            className="bg-white hover:bg-blue-100 text-blue-500 border border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setIsDeleteAllCommentsModalVisible(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Delete All
          </button>
        </div>
      </form>
    </Modal>
  ) : null;
}
