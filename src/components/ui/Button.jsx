import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    danger:
      "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
    success:
      "bg-success text-white hover:bg-success/90 focus:ring-success",
    dark:
      "bg-dark text-white hover:bg-gray-800 focus:ring-gray-900",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm",
    md: "h-9 px-4 text-sm sm:h-11 sm:px-6 sm:text-base",
    lg: "h-11 px-6 text-base sm:h-12 sm:px-8 sm:text-lg",
    full:
      "w-full h-11 px-6 text-base sm:h-12 sm:px-8 sm:text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
