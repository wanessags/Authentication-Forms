
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import SocialButton from "../ui/SocialButton.jsx";

export default function SocialLogin() {
  const providers = [
    {
      name: "Google",
      icon: FaGoogle,
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
    },
    {
      name: "Apple",
      icon: FaApple,
    },
  ];

  const handleSocialLogin = (provider) => {
    console.log(`Provedor selecionado: ${provider}`);
  };

  return (
    <div className="flex w-full items-center justify-center gap-[14px]">
      {providers.map((provider) => {
        const Icon = provider.icon;

        return (
          <SocialButton
            key={provider.name}
            provider={provider.name}
            onClick={() => handleSocialLogin(provider.name)}
          >
            <Icon
              size={22}
              aria-hidden="true"
            />
          </SocialButton>
        );
      })}
    </div>
  );
}
