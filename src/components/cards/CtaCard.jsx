import Button from "../ui/Button";

export default function CtaCard({
  title,
  description,
  buttonText,
  variant = "primary",
  onClick
}) {
  const isDanger = variant === "danger";

  return (
    <div
    style={{boxShadow: '0px 0px 40px 10px rgba(0,0,0,0.10)'}}
      className={`rounded-2xl p-10 flex flex-col mb-8 justify-between items-center text-center
        bg-white      `}
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 mt-2">
          {description}
        </p>
      </div>

      <div className="mt-3 w-full">
        <Button
          variant={variant}
          className="w-fit"
          size="full"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
