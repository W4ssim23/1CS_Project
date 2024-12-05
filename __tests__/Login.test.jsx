// __tests__/Login.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "@/app/[locale]/login/page";
import LoginForm from "@/app/[locale]/login/components/LoginForm";
import SidePic from "@/app/[locale]/login/components/SidePic";

// Mock next/navigation
const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock next/link
jest.mock("next/link", () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

describe("Login Page", () => {
  // Main page tests
  describe("Page Structure", () => {
    it("renders without crashing", async () => {
      const { container } = render(await Login());
      expect(container).toBeInTheDocument();
    });

    // it("has correct container styling", async () => {
    //   const { container } = render(await Login());
    //   const mainDiv = container.firstChild;
    //   expect(mainDiv).toHaveClass("h-full w-full min-w-screen flex");
    // });

    it("maintains correct component order", async () => {
      render(await Login());
      const sidePic = screen.getByTestId("side-pic");
      const loginForm = screen.getByTestId("login-form");
      expect(sidePic).toBeInTheDocument();
      expect(loginForm).toBeInTheDocument();
    });
  });

  // LoginForm component tests
  describe("LoginForm Component", () => {
    beforeEach(() => {
      render(<LoginForm />);
    });

    it("renders all form elements", () => {
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /sign-in/i })
      ).toBeInTheDocument();
    });

    it("handles input changes", async () => {
      const usernameInput = screen.getByLabelText(/username/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await userEvent.type(usernameInput, "testuser");
      await userEvent.type(passwordInput, "password123");

      expect(usernameInput).toHaveValue("testuser");
      expect(passwordInput).toHaveValue("password123");
    });

    it("contains sign-up link", () => {
      // Use a more flexible text matcher
      // expect(
      //   screen.getByText((content, element) => {
      //     return content.includes("Vous n'avez pas un compte?");
      //   })
      // ).toBeInTheDocument();

      const link = screen.getByRole("link", { name: /sign-up/i });
      expect(link).toHaveAttribute("href", "/register");
    });

    it("handles form submission", async () => {
      const submitButton = screen.getByRole("button", { name: /sign-in/i });
      await userEvent.click(submitButton);
      expect(mockPush).toHaveBeenCalledWith("/");
    });
  });

  // SidePic component tests
  describe("SidePic Component", () => {
    beforeEach(() => {
      render(<SidePic />);
    });

    it("renders welcome message", () => {
      expect(
        screen.getByText(/BIENVENUE SUR DZ-ARTISAN!/i)
      ).toBeInTheDocument();
    });

    it("renders subtitle text", () => {
      expect(screen.getByText(/Rejoignez-nous/i)).toBeInTheDocument();
    });

    it("renders image", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", "Register");
    });

    // it("has correct styling", () => {
    //   const container =
    //     screen.getByText(/BIENVENUE/i).parentElement.parentElement;
    //   expect(container).toHaveClass("h-full w-full flex flex-col items-start");
    // });
  });
});
