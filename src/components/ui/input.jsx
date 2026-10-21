
export default function Input({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[13px] font-medium text-white"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`h-14 w-full rounded-xl border bg-[#071E3A] px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]/20 ${
          error ? "border-red-500" : "border-[#102D50]"
        }`}
      />

      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-xs text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
