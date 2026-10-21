
import SocialButton from "../ui/SocialButton.jsx";

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
    <div className="flex w-full items-center justify-center gap-[14px]">
      {providers.map((provider) => (
        <SocialButton
          key={provider.name}
          provider={provider.name}
          onClick={() => handleSocialLogin(provider.name)}
        >
          {provider.name === "Apple" ? (
            <span className="text-xs font-medium">Apple</span>
          ) : (
            provider.symbol
          )}
        </SocialButton>
      ))}
    </div>
  );
}
