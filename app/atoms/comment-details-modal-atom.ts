import { atom } from "jotai";

export const commentDetailsModalAtom = atom({
  isVisible: false,
  details: {
    id: "",
    name: "",
    message: "",
    createdAt: "",
  },
});
