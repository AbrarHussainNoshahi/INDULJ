import {
  TextInput,
  Label,
  Select,
  Textarea,
  ToggleSwitch,
} from "flowbite-react";
import { useState } from "react";
import Button from "../components/ui/Button";
import ConfirmDeal from "../components/ui/ConfirmDeal";
import toast from "react-hot-toast";
import { useModal } from "../hooks/useModal";

function HappyHourForm() {
  const [isPublic, setIsPublic] = useState(true);
  // const [openModal, setOpenModal] = useState(false);
  const [blur, setBlur] = useState(false);

  const {Modal, setIsOpen} = useModal();


  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function onConfirm(){
    setBlur(true);
    setIsOpen(false);
    toast.success("Your Happy Hour Has Been Submitted!");
    setTimeout(() => {
      setBlur(false);
    }, 3000);
  }

  return (
    <div className="my-8 sm:my-10 md:my-15 lg:my-20">
      {blur && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto rounded-lg bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl text-center text-darktext font-bold">
            Plan My Happy Hour
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Restaurant */}
          <div>
            <Label htmlFor="restaurant" className="font-bold">
              Select Restaurant*
            </Label>
            <Select id="restaurant" required className="custom-select-2">
              <option>-Select type of restaurant</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Fast Food</option>
            </Select>
          </div>

          {/* Group Size */}
          <div>
            <Label htmlFor="group_size" className="font-bold">
              Group Size*
            </Label>
            <TextInput
              id="group_size"
              type="number"
              placeholder="Enter group size"
              className="custom-input"
              required
            />
          </div>

          {/* Time Slot Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="add_time_slots" className="font-bold">
              Add Time Slots:
            </Label>
          </div>

          {/* Time Slots */}
          
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Select className="custom-select-2 text-gray-400">
                  <option value='' disabled>Start time</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </Select>
              </div>

              <div>
                <Select className="custom-select-2">
                  <option value='' disabled>End time</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                </Select>
              </div>
            </div>
          

          {/* Vibe */}
          <div>
            <Label htmlFor="vibe" className="font-bold">
              Vibe:*{" "}
              <span className="text-sm font-normal text-gray-400">
                (casual, business, fun, etc)
              </span>
            </Label>
            <Select id="vibe" required className="custom-select-2">
              <option disabled>Enter your vibe</option>
              <option>Casual</option>
              <option>Business</option>
              <option>Fun</option>
            </Select>
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="font-bold">
              Location*
            </Label>
            <TextInput
              id="location"
              placeholder="Enter restaurant location"
              className="custom-input"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="font-bold">
              Description
            </Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Write description ...."
              className="custom-textarea"
            />
          </div>

          {/* Public / Private */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Public</span>
            <ToggleSwitch
            color="failure"
              checked={isPublic}
              onChange={setIsPublic}
            />
            <span className="text-sm font-medium">Private</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4">
          <Button
            variant="success"
            className="w-full"
            size="md"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* <Modal position="center" size="md" dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalBody>
          <ConfirmDeal setOpenModal={setOpenModal} onConfirm={onConfirm} />
        </ModalBody>
      </Modal> */}
      <Modal>
          <ConfirmDeal setOpenModal={setIsOpen} onConfirm={onConfirm} />
      </Modal>
    </div>
  );
}

export default HappyHourForm;
