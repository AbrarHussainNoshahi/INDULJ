import { FaCheckCircle } from "react-icons/fa"
import Button from "./Button"

function ConfirmDeal({onConfirm, setOpenModal}) {
  return (
    <div className="flex flex-col items-center justify-around">
        <FaCheckCircle className="text-danger" size={60} />
        <h3 className="text-[#3B3E40] font-bold text-xl text-center my-2">Are you Sure?</h3>
        <p className="text-[#868686] text-center mb-2">Event saved in My Happy Hours in the user dashboard</p>
        <div className="flex justify-around w-100 mt-2 px-4 sm:px-0">
            <Button variant="danger" className='w-30 md:w-40 text-[12px] md:text-[14px] ' onClick={() => setOpenModal(false)}>Back</Button>
            <Button variant="success" className='w-30 md:w-40 text-[12px] md:text-[14px] ' onClick={onConfirm}>Yes Confirmed</Button>
        </div>
    </div>
  )
}

export default ConfirmDeal