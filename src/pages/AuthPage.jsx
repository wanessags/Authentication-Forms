
import BackgroundEffects from "../components/layout/BackgroundEffects.jsx";
import AuthBadge from "../components/ui/AuthBadge.jsx";
import SignInForm from "../components/auth/SignInForm.jsx";

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
