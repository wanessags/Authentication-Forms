
export default function SocialButton({
  children,
  provider,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Continue with ${provider}`}
      className="
        flex h-14 w-14 items-center justify-center
        rounded-[14px] border border-[#1B3555]
        bg-[#071E3A] text-lg font-semibold text-white
        transition-all duration-200
        hover:border-[#FFD60A] hover:bg-[#102B4B]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[#FFD60A]
        active:scale-95
        disabled:cursor-not-allowed disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}
