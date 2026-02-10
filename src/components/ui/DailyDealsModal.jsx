import { ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiPhone,
} from "react-icons/hi";
import Button from "./Button";

function DailyDealsModal({ onConfirm, deal, setIsOpen }) {
  const dealImage = `${import.meta.env.BASE_URL}${deal.image}`

  return (
    <>
      <ModalHeader className="[&_h3]:font-bold">Deal Detail</ModalHeader>
      <ModalBody className="p-5">
        <div>
          <div className="w-full h-[272px] overflow-hidden rounded-lg">
            <img
              src={dealImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex items-center gap-2 mb-1 mt-3">
            {deal.tags.map((tag) => (
              <span
                key={tag}
                className="text-[14px] font-semibold text-danger bg-[#DC4D42]/8 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
            <span className="ml-auto mr-1.25 text-[#ff0000] font-bold text-[24px]">
              {deal.price}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[13px] mb-2">
            <div className="flex gap-1 text-[#FF0000] ">
              {Array.from({ length: 5 }).map((_, i) => {
                const rating = deal.rating;
                if (rating >= i + 1) {
                  return <FaStar key={i} />;
                }
                if (rating >= i + 0.5) {
                  return <FaStarHalfAlt key={i} />;
                }
                return <FaRegStar key={i} className="opacity-30" />;
              })}
            </div>

            <span className="text-gray-400">{deal.rating}/5.0</span>
          </div>
          <p className="text-[#FF0000] underline text-sm font-semibold mb-2">
            {deal.restaurantName}
          </p>

          {/* Title */}
          <h3 className="text-[25px] text-[#111111] font-bold">
            {deal.title}
          </h3>

          {/* Description */}
          <p className="text-[16px] text-[#888A8B] ">
            {deal.description}
          </p>

          {/* Address */}
          <div className="flex my-2">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="rounded-full text-[16px] text-[#ff0000]">
                <HiOutlineLocationMarker />
              </span>
              <span className=" text-[14px] font-medium text-[#111111]">
                {deal.address}
              </span>
            </div>
            <div className="flex items-center gap-2 ml-5 text-sm text-gray-400">
              <span className="rounded-full text-[16px] text-[#ff0000]">
                <HiPhone />
              </span>
              <span className=" text-[14px] font-medium text-[#111111]">
                {deal.contact_no}
              </span>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="w-full justify-end flex gap-3">
          <Button variant="danger" size="md" className="w-[100px] md:w-[150px]" onClick={() => setIsOpen(false)}>
            Close
          </Button>
          <Button variant="success" size="md" onClick={onConfirm} className=''>
            <HiOutlineHeart className="mr-2" />
            Save to Favourite
          </Button>
        </div>
      </ModalFooter>
    </>
  );
}

export default DailyDealsModal;
