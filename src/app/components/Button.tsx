interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md transition-all duration-[var(--duration-base)] ease-[var(--ease-in-out)] inline-flex items-center justify-center gap-2";

  const variantStyles = {
    primary: "bg-[var(--color-primary-soft-blue)] text-white hover:bg-[var(--color-primary-deep-teal)]",
    secondary: "bg-transparent border-2 border-[var(--color-primary-deep-teal)] text-[var(--color-primary-deep-teal)] hover:bg-[var(--color-warm-gray-50)]",
    accent: "bg-[var(--color-warm-peach)] text-[var(--color-warm-gray-900)] hover:brightness-95"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
