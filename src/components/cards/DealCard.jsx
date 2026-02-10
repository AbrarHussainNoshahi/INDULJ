import { useState } from "react";
import FavouriteButton from "../ui/FavouriteButton";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

function DealCard({ deal, isActive }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const dealImage = `${import.meta.env.BASE_URL}${deal.image}`

  return (
    <div
      className=" relative w-full rounded-2xl bg-center bg-cover bg-no-repeat
    transition-all duration-300
    aspect-[16/12] sm:aspect-auto
    lg:h-[20rem]
    md:h-[16rem]
    sm:h-[14rem]
    p-2 sm:p-2 md:p-3"
      style={{
        backgroundImage: `url(${dealImage})`,
      }}
    >
      {/* Dark overlay only when active */}
      {<div className="absolute inset-0 bg-black/30 rounded-2xl" />}

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
              <div className="price text-[8px] min-[400px]:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-medium text-white">
                ${deal.price}
              </div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div className="text-white">
                <h3 className="lg:text-[16px] text-[7px] min-[400px]:text-[9px] sm:text-[12px] md:text-[12px] font-bold">
                  {deal.title}
                </h3>
                <p className="lg:text-[14px] text-[6px] min-[400px]:text-[8px] sm:text-[11px]] md:text-[11px]">
                  {deal.subtitle}
                </p>
              </div>
              <Button
                size="sm"
                variant="danger"
                className="lg:h-8! md:px-3 lg:px-4! rounded-sm min-[560px]:h-6! min-[560px]:text-[8px] text-[5px] md:text-[12px] sm:text-[10px] px-2! sm:h-6! text-nowrap h-4! md:h-8!"
              >
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
