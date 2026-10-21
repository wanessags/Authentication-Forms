
export default function AuthDivider() {
  return (
    <div
      role="separator"
      aria-label="Or continue with"
      className="flex w-full items-center gap-4"
    >
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[#1B3555]"
      />

      <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-slate-500">
        OR CONTINUE WITH
      </span>

      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[#1B3555]"
      />
    </div>
  );
}
