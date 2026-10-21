
import SocialButton from "../ui/SocialButton";

export default function SocialLogin() {
  const providers = [
    { name: "Google", symbol: "G" },
    { name: "Facebook", symbol: "f" },
    { name: "Apple", symbol: "" },
  ];

  const handleSocialLogin = (provider) => {
    console.log(`Login social selecionado: ${provider}`);
  };

  return (
    <div>
      {providers.map((provider) => (
        <SocialButton
          key={provider.name}
          provider={provider.name}
          onClick={() => handleSocialLogin(provider.name)}
        >
          {provider.name === "Apple" ? "Apple" : provider.symbol}
        </SocialButton>
      ))}
    </div>
  );
}
