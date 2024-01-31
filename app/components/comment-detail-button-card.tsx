import edit from "../images/edit.svg";
import { useSetAtom } from "jotai/react";
import { commentDetailsModalAtom } from "~/atoms/comment-details-modal-atom";
export function CommentDetailButtonCard({
  id,
  message,
  name,
  createdAt,
}: {
  id: string;
  message: string;
  name: string;
  createdAt: string;
}) {
  const setCommentDetails = useSetAtom(commentDetailsModalAtom);

  return (
    <li>
      <button
        onClick={() =>
          setCommentDetails({
            isVisible: true,
            details: { message, name, id, createdAt },
          })
        }
        className="border border-gray-300 p-4 w-full h-full rounded hover:bg-gray-200 text-left flex flex-col justify-between shadow-xl"
      >
        <p className="multiple-line-ellipses">{message}</p>
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
          <div className="italic font-extralight text-sm">
            <p>{`By: ${name}`}</p>
          </div>
          <img src={edit} alt="edit icon" className="h-6" />
        </div>
      </button>
    </li>
  );
}
