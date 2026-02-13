import SearchInput from "./../ui/SearchInput";
import DailyDealItem from "./../ui/DailyDealItem";
import { FiSearch } from "react-icons/fi";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import dailyDeals from "../../utils/dailyDeals";

// import DealsNavButton from "./DealsNavButton";
export default function DailyDealsSection({ deals = dailyDeals }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigate = useNavigate();

  
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className=" py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:flex-row items-center md:justify-between flex-col sm:justify-center mb-8">
          <h2 className="fluid-xl lg:fluid-2xl font-bold text-dark mb-2 lg:mb-0">
            Daily Deals List
          </h2>
          <SearchInput
            icon={FiSearch}
            placeholder="Search Food"
            buttonTxt="Search"
          />
        </div>

        <div className="relative py-3 flex justify-between">
          <button
            className={`h-auto dailyDeals-nav text-[50px] ${
              isBeginning ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
            aria-level="previous"
            ref={prevRef}
          >
            <BsArrowLeftCircle />
          </button>

          {/* <Swiper
            slidesPerView={3}
            spaceBetween={15}
            direction="horizontal"
            grid={{
              rows: 2,
              fill: "row",
            }}
            breakpoints={{
              0: {
                slidesPerView: 5,
                direction: "vertical",
                grid: undefined
              },
              768: {
                // 💻 tablet & up
                slidesPerView: 3,
                direction: "horizontal",
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              if (swiper) {
                setSwiperInstance(swiper);
              }
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Grid, Navigation]}
            className="dailyDeals_swiper"
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <DailyDealItem deal={deal} />
              </SwiperSlide>
            ))}
          </Swiper> */}
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={15}
            direction="horizontal"
            grid={{
              rows: 5,
              fill: 'row' // mobile default
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 5,
                  fill: 'row'
                },
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                grid: {
                  rows: 2, // ✅ grid starts here
                  fill: "row",
                },
              },
              1124: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setSwiperInstance(swiper);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Grid, Navigation]}
            className="dailyDeals_swiper"
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <DailyDealItem deal={deal} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`h-auto dailyDeals-nav text-[50px] ${
              isEnd ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
            aria-level="next"
            ref={nextRef}
          >
            <BsArrowRightCircle />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <button onClick={() => navigate('/daily-deals')} className="border font-semibold border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-danger hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
