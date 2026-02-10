import { useModal } from "../../hooks/useModal";
import DailyDealsModal from "./DailyDealsModal";

export default function DailyDealItem({ deal }) {
  const { Modal, open, close, setIsOpen } = useModal();
  const dealImage = `${import.meta.env.BASE_URL}${deal.image}`
  function onConfirm() {
    close();
  }

  return (
    <>
      <div
        className="rounded-xl w-full h-25 flex items-center shadow justify-center px-3 gap-2 sm:gap-3 md:gap-4 cursor-pointer"
        onClick={open}
      >
        <img
          src={dealImage}
          alt={deal.title}
          className="h-16 w-16 rounded-lg object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {deal.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-danger bg-[#DC4D42]/8 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
            <span className="ml-auto mr-1.25 text-danger font-bold text-[15px]">
              {deal.price}
            </span>
          </div>

          <h3 className="font-semibold text-[20px] leading-tight">
            {deal.title}
          </h3>

          <p className="text-[16px] text-gray-400 truncate w-50 sm:w-60 ">
            {deal.description}
          </p>
        </div>
      </div>
      <Modal size='3xl'>
        <DailyDealsModal deal={deal} onConfirm={onConfirm} setIsOpen={setIsOpen}/>
      </Modal>
    </>
  );
}
