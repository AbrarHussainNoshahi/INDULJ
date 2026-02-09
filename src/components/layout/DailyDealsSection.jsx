import SearchInput from "./../ui/SearchInput";
import DailyDealItem from "./../ui/DailyDealItem";
import { FiSearch } from "react-icons/fi";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import DealsNavButton from "./DealsNavButton";

 const dailyDeals = [
  {
    id: 1,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.6,
    restaurantName: "Sunset Grill & Bar",
    address: "123 Ocean Drive, Honolulu, HI",
    contact_no: "+1 808-555-0123",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 2,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.2,
    restaurantName: "Island Flame Kitchen",
    address: "456 Palm Street, Honolulu, HI",
    contact_no: "+1 808-555-0145",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 3,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.8,
    restaurantName: "Lilikoi Lounge",
    address: "89 Beachwalk Ave, Waikiki, HI",
    contact_no: "+1 808-555-0189",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 4,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.1,
    restaurantName: "The Golden Skillet",
    address: "77 Ala Moana Blvd, Honolulu, HI",
    contact_no: "+1 808-555-0111",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 5,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.9,
    restaurantName: "Pacific Ember",
    address: "12 Harbor Road, Honolulu, HI",
    contact_no: "+1 808-555-0199",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 6,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.3,
    restaurantName: "Aloha Fire Grill",
    address: "301 King Street, Honolulu, HI",
    contact_no: "+1 808-555-0167",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 7,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.0,
    restaurantName: "Urban Tiki Tavern",
    address: "88 Downtown Ave, Honolulu, HI",
    contact_no: "+1 808-555-0134",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 8,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.7,
    restaurantName: "Coastal Crave",
    address: "19 Seaside Lane, Honolulu, HI",
    contact_no: "+1 808-555-0176",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 9,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.4,
    restaurantName: "Flame & Stone",
    address: "245 Lava Road, Honolulu, HI",
    contact_no: "+1 808-555-0152",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 10,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.5,
    restaurantName: "Tropical Hearth",
    address: "67 Coconut Plaza, Honolulu, HI",
    contact_no: "+1 808-555-0180",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 11,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.1,
    restaurantName: "Harbor Heat",
    address: "9 Pier Street, Honolulu, HI",
    contact_no: "+1 808-555-0109",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
  {
    id: 12,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak leaf, Onion, Mist & tomato, pickles, mustard and….",
    price: "$45.00",
    rating: 4.8,
    restaurantName: "Ember Coast Kitchen",
    address: "410 Sunset Blvd, Honolulu, HI",
    contact_no: "+1 808-555-0190",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"],
  },
];

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
          <h2 className="text-3xl font-bold text-dark mb-2 lg:mb-0">
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
