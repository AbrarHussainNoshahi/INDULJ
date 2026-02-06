import { useState } from "react";
import FavouriteButton from "../ui/FavouriteButton";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

function DealCard({ deal, isActive }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div
      className=" relative w-full rounded-2xl bg-center bg-cover bg-no-repeat
    transition-all duration-300
    aspect-[16/12] sm:aspect-auto
    lg:h-[20rem]
    md:h-[16rem]
    sm:h-[14rem]
    p-3 sm:p-4"
      style={{
        backgroundImage: `url(${deal.image})`,
      }}
    >
      {/* Dark overlay only when active */}
      {isActive && <div className="absolute inset-0 bg-black/30 rounded-2xl" />}

      {/* Content only visible on active slide */}
      {isActive && (
        <div className="content relative flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <FavouriteButton
              isFavourite={isFavourite}
              setIsFavourite={setIsFavourite}
            />
          </div>

          <div className="details">
            <div className="flex justify-between">
              <div className="flex gap-2">
                {deal.tags.map((tag, i) => (
                  <Tag key={i} text={tag} />
                ))}
              </div>
              <div className="price text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-medium text-white">
                ${deal.price}
              </div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div className="text-white">
                <h3 className="lg:text-[16px] text-[8px] md:text-[14px] font-bold">
                  {deal.title}
                </h3>
                <p className="lg:text-[14px] text-[7px] md:text-[12px]">{deal.subtitle}</p>
              </div>
              <Button size="sm" variant="danger">
                View Deal
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DealCard;
