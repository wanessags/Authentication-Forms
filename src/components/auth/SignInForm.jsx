
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import AuthDivider from "./AuthDivider.jsx";
import SocialLogin from "./SocialLogin.jsx";

export default function SignInForm({ onSwitchToSignUp }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="flex w-full flex-col gap-[18px]">
      {/* Cabeçalho */}
      <header className="space-y-2">
        <h1 className="text-[30px] font-bold tracking-tight text-[#FFD60A]">
          Welcome Back
        </h1>

        <p className="text-sm text-slate-400">
          Sign in to continue your journey
        </p>
      </header>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[18px]"
      >
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
        />

        {/* Lembrar senha e recuperação */}
        <div className="flex items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-400">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer accent-[#FFD60A]"
            />
            Remember me
          </label>

          <a
            href="#forgot-password"
            onClick={(event) => event.preventDefault()}
            className="text-xs font-medium text-[#FFD60A] transition hover:text-[#FFE34D]"
          >
            Forgot password?
          </a>
        </div>

        <Button type="submit">Sign In</Button>
      </form>

      {/* Login social */}
      <AuthDivider />
      <SocialLogin />

      {/* Alternar para cadastro */}
      <footer className="text-center">
        <p className="text-xs text-slate-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-semibold text-[#FFD60A] transition hover:text-[#FFE34D]"
          >
            Sign Up
          </button>
        </p>
      </footer>
    </section>
  );
}
