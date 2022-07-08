import { render, screen } from "@testing-library/react";
import { Example5 } from "./example5";

jest.mock("./VeryComplex");

describe("Example 5", () => {
  it("renders very complex component", () => {
    render(<Example5 />);
    expect(screen.getByText("SIMPLE VERSION")).toBeInTheDocument();
  });
});
