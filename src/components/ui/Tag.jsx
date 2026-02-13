import { Badge } from "flowbite-react";

function Tag({ text }) {
  return (
    <Badge
      className="bg-white/16 text-[5px] min-[400px]:text-[8px] sm:text-[8px] md:fluid-sm text-white hover:bg-white/16 font-thin px-1 md:px-2 lg:px-3"
      size="sm"
    >
      {text}
    </Badge>
  );
}

export default Tag;
