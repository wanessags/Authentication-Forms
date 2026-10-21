
import { useState } from "react";

import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import AuthDivider from "./AuthDivider.jsx";
import SocialLogin from "./SocialLogin.jsx";

export default function SignInForm({ onSwitchToSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must have at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Login validado com sucesso:", {
      email: formData.email.trim(),
      rememberMe,
    });
  };

  return (
    <section className="flex w-full flex-col gap-[18px]">
      <header className="space-y-2">
        <h1 className="text-[30px] font-bold tracking-tight text-[#FFD60A]">
          Welcome Back
        </h1>
        <p className="text-sm text-slate-400">
          Sign in to continue your journey
        </p>
      </header>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex flex-col gap-[18px]"
      >
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="flex items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-400">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 cursor-pointer accent-[#FFD60A]"
            />
            Remember me
          </label>

          <a
            href="#forgot-password"
            onClick={(event) => event.preventDefault()}
            className="text-xs font-medium text-[#FFD60A] hover:text-[#FFE34D]"
          >
            Forgot password?
          </a>
        </div>

        <Button type="submit">Sign In</Button>
      </form>

      <AuthDivider />
      <SocialLogin />

      <footer className="text-center">
        <p className="text-xs text-slate-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-semibold text-[#FFD60A] hover:text-[#FFE34D]"
          >
            Sign Up
          </button>
        </p>
      </footer>
    </section>
  );
}
