import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("root should have button", () => {
    const { container } = render(<Root />);
    const actual = container.querySelector("button");
    expect(actual).toBeTruthy();
  });
});
