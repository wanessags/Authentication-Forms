
export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  loading = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="
        flex h-14 w-full items-center justify-center
        rounded-xl bg-[#FFD60A] px-4
        text-sm font-semibold text-[#000814]
        shadow-[0_6px_20px_rgba(255,214,10,0.18)]
        transition-all duration-200
        hover:bg-[#FFE34D]
        hover:shadow-[0_8px_25px_rgba(255,214,10,0.3)]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
