
import { useState } from "react";

import BackgroundEffects from "../components/layout/BackgroundEffects.jsx";
import AuthBadge from "../components/ui/AuthBadge.jsx";
import SignInForm from "../components/auth/SignInForm.jsx";
import SignUpForm from "../components/auth/SignUpForm.jsx";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const showSignIn = () => {
    setIsSignIn(true);
  };

  const showSignUp = () => {
    setIsSignIn(false);
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#000814] text-white">
      <BackgroundEffects />

      {/* Cabeçalho */}
      <header className="relative z-10 flex w-full items-center justify-between px-6 pt-8 md:px-14 md:pt-12">
        <AuthBadge />

        <span className="text-xs font-medium tracking-widest text-slate-400">
          {isSignIn ? "SIGN IN" : "SIGN UP"}
        </span>
      </header>

      {/* Card de autenticação */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px] rounded-[24px] border border-blue-900/30 bg-[#061831] px-[30px] pb-[30px] pt-[34px] shadow-2xl">
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
