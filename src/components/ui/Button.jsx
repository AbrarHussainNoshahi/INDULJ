import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  ...props
}) => {
  const base =
    "inline-flex items-center cursor-pointer justify-center rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white focus:ring-primary",
    danger: "bg-danger text-white focus:ring-danger",
    success: "bg-success text-white focus:ring-success",
    dark: "bg-dark text-white focus:ring-gray-900",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100"
  };

  const sizes = {
  sm: "h-4 sm:h-5 md:h-7 lg:h-10 px-1 sm:px-2 md:px-3 lg:px-4 text-[5px] md:text-sm sm:px-6 ",
  md: "h-9 px-4 text-sm sm:h-11 sm:px-6 sm:text-base",
  lg: "h-10 px-5 text-base sm:h-12 sm:px-8 sm:text-lg",
  full: "w-full h-10 px-5 text-base sm:h-12 sm:px-8 sm:text-lg"
};

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
