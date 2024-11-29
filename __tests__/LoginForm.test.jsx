import { render, screen } from "@testing-library/react";
import LoginForm from "@/app/[locale]/login/components/LoginForm";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

it("should have Sign-up text", () => {
  render(<LoginForm />);
  const myElem = screen.getByText("Sign-up");
  expect(myElem).toBeInTheDocument();
});
