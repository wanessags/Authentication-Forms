
import { useState } from "react";

import BackgroundEffects from "../components/layout/BackgroundEffects.jsx";
import AuthBadge from "../components/ui/AuthBadge.jsx";
import SignInForm from "../components/auth/SignInForm.jsx";
import SignUpForm from "../components/auth/SignUpForm.jsx";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const showSignIn = () => setIsSignIn(true);
  const showSignUp = () => setIsSignIn(false);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#000814] text-white">
      <BackgroundEffects />

      {/* Cabeçalho */}
      <header className="relative z-10 flex w-full items-center justify-between gap-4 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pt-12">
        <AuthBadge />

        <span className="shrink-0 text-[11px] font-medium tracking-[0.15em] text-slate-400">
          {isSignIn ? "SIGN IN" : "SIGN UP"}
        </span>
      </header>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        <div
          className="
            w-full max-w-[480px]
            rounded-[24px]
            border border-blue-900/30
            bg-[#061831]
            px-5 pb-7 pt-8
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
            sm:px-[30px] sm:pb-[30px] sm:pt-[34px]
          "
        >
          {isSignIn ? (
            <SignInForm onSwitchToSignUp={showSignUp} />
          ) : (
            <SignUpForm onSwitchToSignIn={showSignIn} />
          )}
        </div>
      </div>
    </main>
  );
}
