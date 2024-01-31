import { render, screen } from "@testing-library/react";

import { Header } from "./header";

describe("Header", () => {
  describe("When shouldShowCTAButtons is false", () => {
    it("Should not render any CTA buttons", () => {
      render(<Header shouldShowCTAButtons={false} />);
      expect(
        screen.queryByRole("button", { name: "Delete All Comments" }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Add Comment" }),
      ).not.toBeInTheDocument();
    });
  });
  describe("When shouldShowCTAButtons is true", () => {
    it("Should render CTA buttons", () => {
      render(<Header shouldShowCTAButtons={true} />);
      expect(
        screen.getByRole("button", { name: "Delete All Comments" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Add Comment" }),
      ).toBeInTheDocument();
    });
  });
  // Would add mocks and click handler tests if time permitted

  // describe("When each CTA Button is clicked", () => {
  //   it("Fires useSetAtom to open the corresponding modal", () => {
  //     render(<Header shouldShowCTAButtons={true} />);
  //     fireEvent.click(
  //       screen.getByRole("button", { name: "Delete All Comments" }),
  //     );
  //     expect(mockUseSetAtom).toHaveBeenCalledWith({});
  //   });
  // });
});
