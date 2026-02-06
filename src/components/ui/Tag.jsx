import { Badge } from "flowbite-react"

function Tag({ text }) {
  return (
    <Badge className="bg-white/16 text-[5px] lg:text-[12px] md:text-[12px] text-white hover:bg-white/16 font-thin px-1 md:px-2 lg:px-3" size="sm">{text}</Badge>
  )
}

export default Tag