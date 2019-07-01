import React from "react";
import { render } from "../../test-utils";
import Foo from "./foo";

it("Renders and has text content", () => {
  const { getByText } = render(<Foo />);
  getByText("Foo page");
});
