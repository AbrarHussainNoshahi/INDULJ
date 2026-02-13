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
              <div className="price fluid-sm md:fluid-base xl:fluid-lg font-medium text-white">
                ${deal.price}
              </div>
            </div>

            <div className="flex py-2 items-center justify-between">
              <div className="text-white">
                <h3 className="fluid-xs sm:fluid-sm md:fluid-base xl:fluid-lg font-bold">
                  {deal.title}
                </h3>
                <p className="fluid-xs sm:fluid-sm md:fluid-base ">
                  {deal.subtitle}
                </p>
              </div>
              <Button
                size="sm"
                variant="danger"
                className="lg:h-8! md:px-3 lg:px-4! rounded-sm min-[560px]:h-6! fluid-sm px-2! sm:h-6! text-nowrap h-6! md:h-8!"
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
