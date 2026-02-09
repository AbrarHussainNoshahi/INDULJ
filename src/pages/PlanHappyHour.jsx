import { FiHeart } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import HappyHourForm from "../features/HappyHourForm";
import ButtonIcon from "../components/ui/ButtonIcon";

function PlanHappyHour() {
  return (
    <>
      <Navbar
        icon={
          <ButtonIcon border={true}>
            <FiHeart />
          </ButtonIcon>
        }
      />
      <Hero
        image="hero-2.svg"
        title="Plan My Happy Hour"
        subtitle="Plan you happy hours to get the perfect meal!"
        showButtons={false}
        className={"lg:min-h-[470px]! min-h-117.5!"}
      />
      <HappyHourForm />
      <Footer />
    </>
  );
}

export default PlanHappyHour;
