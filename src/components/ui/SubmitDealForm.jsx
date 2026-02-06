import {
  TextInput,
  Label,
  Select,
  Textarea,
  ToggleSwitch,
} from "flowbite-react";
import { useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";

export default function SubmitDealForm({ setOpenModal }) {
  const [enableTime, setEnableTime] = useState(true);
  const [blur, setBlur] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setBlur(true);

    // 🔥 success toast
    toast.success("Deal submitted successfully!");
    setTimeout(() => {
      setBlur(false);
      setOpenModal(false);
    }, 3000);
  };
  return (
    <>
      {blur && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-lg"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#a5a6a7]">
          <h2 className="text-xl font-semibold text-gray-800">Submit a Deal</h2>
        </div>
        <div className="px-6 py-6 space-y-5">
          <div>
            <Label htmlFor="res_name" className="font-bold">
              Restaurant Name *
            </Label>
            <TextInput
              id="res_name"
              className="custom-input"
              required
              placeholder="Enter restaurant name"
            />
          </div>

          <div>
            <Label htmlFor="branch_name" className="font-bold">
              Location/Branch:*
            </Label>
            <TextInput
              id="branch_name"
              required
              className="custom-input"
              placeholder="Enter location/branch name"
            />
          </div>

          <div>
            <Label htmlFor="price" className="font-bold">
              Add Price:*
            </Label>
            <TextInput
              id="price"
              required
              className="custom-input"
              placeholder="$$$"
            />
          </div>

          <div>
            <Label htmlFor="type_of_food" className="font-bold">
              Type of Food:*
            </Label>
            <Select id="type_of_food" required className="custom-select">
              <option>-Select type of food-</option>
              <option>Fast Food</option>
              <option>Desi</option>
              <option>Chinese</option>
              <option>Italian</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="day_of_week" className="font-bold">
              Day of the Week:*
            </Label>
            <Select id="day_of_week" required className="custom-select">
              <option>-Select day of the week-</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </Select>
          </div>

          <div className="flex items-center justify-between ">
            <Label htmlFor="add_time_slots" className="text-sm text-gray-500">
              Add Time Slots
            </Label>
            <ToggleSwitch
              color="failure"
              id="add_time_slots"
              checked={enableTime}
              onChange={setEnableTime}
            />
          </div>

          {enableTime && (
            <div className="grid grid-cols-2 gap-4">
              <Select className="custom-select">
                <option>Start time</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
              </Select>

              <Select className="custom-select">
                <option>End time</option>
                <option>4:00 PM</option>
                <option>6:00 PM</option>
                <option>10:00 PM</option>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="deal_description" className="font-bold">
              Deal description / Notes:*
            </Label>
            <Textarea
              id="deal_description"
              className="custom-input"
              rows={4}
              placeholder="Deal description ...."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-end gap-4 bg-gray-50 rounded-b-lg">
          <Button
            onClick={() => setOpenModal(false)}
            variant="danger"
            className="w-[120px]"
            size="sm"
          >
            Cancel
          </Button>
          <Button
            variant="success"
            className="w-[120px]"
            size="sm"
            type="submit"
          >
            Submit Deal
          </Button>
          {/* <Button color="success">Submit Deal</Button> */}
        </div>
      </form>
    </>
  );
}
