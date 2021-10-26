import React from "react";
import { render } from "@testing-library/react";
import SignupForm from "./SignupForm"

test("snapshot", () => {
  const { asFragment } = render(<SignupForm />);
  expect(asFragment()).toMatchSnapshot();
});