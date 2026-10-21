
import { useEffect, useRef, useState } from "react";

import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import AuthDivider from "./AuthDivider.jsx";
import SocialLogin from "./SocialLogin.jsx";

export default function SignUpForm({ onSwitchToSignIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

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

    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must have at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must have at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) return;

    setSuccess(false);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    // Simulação de cadastro, sem backend.
    timerRef.current = setTimeout(() => {
      console.log("Cadastro validado:", {
        name: formData.name.trim(),
        email: formData.email.trim(),
      });

      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section className="flex w-full flex-col gap-[18px]">
      <header className="space-y-2">
        <h1 className="text-[30px] font-bold tracking-tight text-[#FFD60A]">
          Create an Account
        </h1>

        <p className="text-sm text-slate-400">
          Join us today! Enter your details to get started.
        </p>
      </header>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex flex-col gap-[18px]"
      >
        <Input
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

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
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button type="submit" loading={loading}>
          Sign Up
        </Button>

        {success && (
          <p
            role="status"
            className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-center text-sm text-green-400"
          >
            Form validated successfully! (Demo only)
          </p>
        )}
      </form>

      <AuthDivider />
      <SocialLogin />

      <footer className="text-center">
        <p className="text-xs text-slate-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            disabled={loading}
            className="font-semibold text-[#FFD60A] hover:text-[#FFE34D] disabled:opacity-50"
          >
            Sign In
          </button>
        </p>
      </footer>
    </section>
  );
}
