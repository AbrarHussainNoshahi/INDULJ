import { FiShoppingBag } from "react-icons/fi";
import ButtonIcon from "./ButtonIcon";
import { Badge } from "flowbite-react";
// import Badge from './Badge'
import { MdOutlineShoppingBag } from "react-icons/md";

function CartButton({ count }) {
  return (
    <ButtonIcon border={true}>
      <MdOutlineShoppingBag />
      {count > 0 && (
        <Badge
          color="danger" // uses your Tailwind theme danger color
          size="xs" // small badge
          className="absolute bg-danger rounded-full right-0 top-0 transform translate-x-1/2 -translate-y-1/2 text-[8px] w-3.75 h-3.75 flex items-center justify-center"
        >
          {count}
        </Badge>
      )}
    </ButtonIcon>
  );
}

export default CartButton;
