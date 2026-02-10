import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";
import { useState } from "react";
import InputSearch from "../components/ui/InputSearch";
import ButtonIcon from "../components/ui/ButtonIcon";
import { FiHeart } from "react-icons/fi";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import DailyDealItem from "../components/ui/DailyDealItem";
import Footer from "../components/layout/Footer";
import dailyDeals from "../utils/dailyDeals";
function DailyDeals() {

  const [searchValue, setSearchValue] = useState("");
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
        image="hero-3.svg"
        title="Today's Steals & Deals"
        subtitle="Plan you happy hours to get the perfect meal!"
        className="lg:min-h-[470px]! min-h-117.5!"
        showButtons={false}
      />
      <PageContainer>
        <div className="mt-10 md:flex justify-between">
          <h2 className="text-xl lg:text-3xl md:text-2xl text-darktext font-bold text-center md:text-right">
            Top Picks / Hot Deals
          </h2>
          <div className="flex gap-2 my-5 md:mt-0">
            <InputSearch
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <ButtonIcon
              border={true}
              className="text-black! bg-white border-dark! hover:bg-[#DC4D42] hover:text-white! hover:border-white! transition-all "
            >
              <CiGrid41 />
            </ButtonIcon>
            <ButtonIcon
              border={true}
              className="text-black! bg-white border-dark! hover:bg-[#DC4D42] hover:text-white! hover:border-white! transition-all "
            >
              <CiGrid2H />
            </ButtonIcon>
          </div>
        </div>
        <div className="mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dailyDeals.map((deal) => (
            <DailyDealItem deal={deal} key={deal.id} />
          ))}
        </div>
      </PageContainer>
      <div className="mt-10 flex justify-center mb-10">
        <button className="border font-semibold border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-danger hover:text-white transition">
          View All
        </button>
      </div>
      <Footer />
    </>
  );
}

export default DailyDeals;
