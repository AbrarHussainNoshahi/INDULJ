import { FiHeart } from "react-icons/fi";
import Navbar from "../components/layout/Navbar";
import ButtonIcon from "../components/ui/ButtonIcon";
import PageContainer from "../components/layout/PageContainer";
import { Label, Select } from "flowbite-react";
import DealMap from "../components/map/DealsMap";
import Footer from "../components/layout/Footer";

function Map() {
  return (
    <>
      <Navbar
        className="bg-black! backdrop-blur-0! relative!"
        icon={
          <ButtonIcon border={true}>
            <FiHeart />
          </ButtonIcon>
        }
      />
      <PageContainer>
        <div className="max-w-4xl mx-auto rounded-lg bg-white">
          <div className="mt-10">
            <h2 className="text-xl lg:text-3xl md:text-2xl text-darktext font-bold">
              Find Your Deals
            </h2>
          </div>
          <div className="mt-7 flex gap-2 justify-between">
            <div className="w-100">
              <Label htmlFor="location" className="font-bold">
                Select Location: *
              </Label>
              <Select id="location" required className="custom-select-2 mt-2">
                <option disabled>Enter Location</option>
                <option>Cities...</option>
              </Select>
            </div>
            <div className="w-100">
              <Label htmlFor="day" className="font-bold">
                Select Day: *
              </Label>
              <Select id="day" required className="custom-select-2 mt-2">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </Select>
            </div>
          </div>
          <div className="h-157.5 mt-10 mb-20">
            <DealMap fromPage={true} />
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Map;
