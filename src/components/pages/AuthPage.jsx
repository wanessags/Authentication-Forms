
import BackgroundEffects from "../components/layout/BackgroundEffects";
import AuthBadge from "../components/ui/AuthBadge";
import SignInForm from "../components/auth/SignInForm";

export default function AuthPage() {
  return (
    <main>
      <BackgroundEffects />

      <header>
        <AuthBadge />

        <span>SIGN IN</span>
      </header>

      <SignInForm />
    </main>
  );
}
