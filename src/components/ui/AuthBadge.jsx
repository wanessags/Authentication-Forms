
export default function AuthBadge() {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full
        border border-[#FFD60A]/30
        bg-[#FFD60A]/10
        px-4 py-2
      "
    >
      <span
        aria-hidden="true"
        className="
          h-2 w-2 rounded-full
          bg-[#FFD60A]
          shadow-[0_0_10px_rgba(255,214,10,0.5)]
        "
      />

      <span
        className="
          text-[11px] font-semibold
          tracking-[0.15em]
          text-[#FFD60A]
        "
      >
        AUTHENTICATION UI
      </span>
    </div>
  );
}
