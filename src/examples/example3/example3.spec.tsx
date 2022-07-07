import { render, screen } from "@testing-library/react";
import React from "react";
import { MyDrawer } from "./example3";
import user from "@testing-library/user-event";

// mock the MUI drawer's html code
jest.mock("@material-ui/core", () => ({
  ...jest.requireActual("@material-ui/core"),
  SwipeableDrawer: jest.fn(() => <div>Hello drawer content</div>),
}));

describe("Drawer", () => {
  it('renders "Hello drawer content"', () => {
    render(<MyDrawer />);
    expect(screen.queryByText("Hello drawer content")).toBeInTheDocument();
  });

  it('clicking on "Open Drawer" Button shows "Hello drawer content"', () => {
    render(<MyDrawer />);
    user.click(screen.getByRole("button", { name: "Open Drawer" }));
    expect(screen.getByText("Hello drawer content")).toBeInTheDocument();
  });
});
