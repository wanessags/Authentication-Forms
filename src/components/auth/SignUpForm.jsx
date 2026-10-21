
import { useState } from "react";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Não exibimos a senha no console.
    console.log("Formulário de cadastro enviado", {
      name: formData.name,
      email: formData.email,
    });
  };

  return (
    <section className="flex w-full flex-col gap-[18px]">
      {/* Cabeçalho */}
      <header className="space-y-2">
        <h1 className="text-[30px] font-bold tracking-tight text-[#FFD60A]">
          Create an Account
        </h1>

        <p className="text-sm text-slate-400">
          Join us today! Enter your details to get started.
        </p>
      </header>

      {/* Formulário */}
      <form
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
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit">
          Sign Up
        </Button>
      </form>

      {/* Separador */}
      <AuthDivider />

      {/* Botões sociais */}
      <SocialLogin />

      {/* Voltar ao login */}
      <footer className="text-center">
        <p className="text-xs text-slate-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="font-semibold text-[#FFD60A] transition hover:text-[#FFE34D]"
          >
            Sign In
          </button>
        </p>
      </footer>
    </section>
  );
}
