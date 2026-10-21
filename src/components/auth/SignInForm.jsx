
import Input from "../ui/Input";
import Button from "../ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLogin from "./SocialLogin";

export default function SignInForm({ onSwitchToSignUp }) {
  return (
    <section>
      <header>
        <h1>Welcome back</h1>
        <p>Enter your credentials to access your account.</p>
      </header>

      <form onSubmit={(event) => event.preventDefault()}>
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <div>
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#forgot-password">
            Forgot password?
          </a>
        </div>

        <Button type="submit">
          Sign In
        </Button>
      </form>

      <AuthDivider />

      <SocialLogin />

      <footer>
        <p>
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
          >
            Sign Up
          </button>
        </p>
      </footer>
    </section>
  );
}
