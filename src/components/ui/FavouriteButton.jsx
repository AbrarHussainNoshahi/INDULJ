import { FaHeart } from "react-icons/fa";
import ButtonIcon from "./ButtonIcon";

function FavouriteButton({ isFavourite, setIsFavourite }) {
  return (
    <ButtonIcon
      border={false}
      onClick={() => {
        setIsFavourite(!isFavourite);
      }}
    >
      <FaHeart className={isFavourite ? "text-danger" : "text-white"} />
    </ButtonIcon>
  );
}

export default FavouriteButton;
