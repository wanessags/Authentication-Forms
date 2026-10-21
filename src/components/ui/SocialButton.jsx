
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
      >
        {children}
      </button>
    );
  }
  