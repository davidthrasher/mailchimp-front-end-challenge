import { getNameAndFormattedTimeOfComment } from "~/utils";

describe("getNameAndFormattedTimeOfComment", () => {
  describe("When either name or createdAt args are falsy", () => {
    it("Returns a string of unknown", () => {
      expect(
        getNameAndFormattedTimeOfComment({ name: "", createdAt: "" }),
      ).toEqual("unknown");
    });
  });
  describe("When name and createdAt args are passed", () => {
    it("Returns them in a formatted string", () => {
      expect(
        getNameAndFormattedTimeOfComment({
          name: "Charlie Kelly",
          createdAt: "2024-01-31T22:29:53.992Z",
        }),
      ).toEqual("By: Charlie Kelly on 1/31/2024 at 5:29:53 PM");
    });
  });
});
