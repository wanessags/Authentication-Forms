
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
      <div>
        <label htmlFor={name}>{label}</label>
  
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
  
        {error && (
          <p id={`${name}-error`} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
  