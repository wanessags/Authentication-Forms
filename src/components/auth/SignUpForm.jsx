
import Input from "../ui/Input";
import Button from "../ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLogin from "./SocialLogin";

export default function SignUpForm({ onSwitchToSignIn }) {
  return (
    <section>
      <header>
        <h1>Create an account</h1>
        <p>
          Join us today! Enter your details to get started.
        </p>
      </header>

      <form onSubmit={(event) => event.preventDefault()}>
        <Input
          label="Full name"
          name="name"
          type="text"
          placeholder="Enter your full name"
        />

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
          placeholder="Create a password"
        />

        <Button type="submit">
          Sign Up
        </Button>
      </form>

      <AuthDivider />

      <SocialLogin />

      <footer>
        <p>
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
          >
            Sign In
          </button>
        </p>
      </footer>
    </section>
  );
}
