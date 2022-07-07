import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { MyDrawer } from "../example3/example3";
import { Example4 } from "./example4";

// import the drawer we made
jest.mock("../example3/example3");
mocked(MyDrawer).mockImplementation(() => <div>mocked: drawer</div>);

describe("Example4", () => {
  it("renders MyDrawer", () => {
    render(<Example4 />);
    expect(
      screen.queryByText("Hello Drawer Component!")
    ).not.toBeInTheDocument();
    expect(screen.getByText("mocked: drawer")).toBeInTheDocument();
  });
});
