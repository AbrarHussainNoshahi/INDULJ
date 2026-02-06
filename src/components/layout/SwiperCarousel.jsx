import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperCarousel.css";
import DealCard from "../cards/DealCard";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "flowbite-react";
function SwiperCarousel() {
  const deals = [
    {
      id: 1,
      title: "NYC Pizza in Different Tastes",
      subtitle: "Large 2-Topping Pizza",
      price: "30.00",
      tags: ["Pizza", "Bar", "Grill"],
      image: "deal-1.svg",
    },
    {
      id: 2,
      title: "The Crab Shack",
      subtitle: "Snow Crab Legs",
      price: "34.00",
      tags: ["Sea Food", "Snow Crab", "Bar Food"],
      image: "deal-2.svg",
    },
    {
      id: 3,
      title: "Bella Trattoria",
      subtitle: "Pasta Night - All Pastas $10",
      price: "38.00",
      tags: ["Italian", "Pasta", "Dinner Special"],
      image: "deal-3.svg",
    },
    {
      id: 4,
      title: "NYC Pizza in Different Tastes",
      subtitle: "Large 2-Topping Pizza",
      price: "30.00",
      tags: ["Pizza", "Bar", "Grill"],
      image: "deal-1.svg",
    },
    {
      id: 5,
      title: "The Crab Shack",
      subtitle: "Snow Crab Legs",
      price: "34.00",
      tags: ["Sea Food", "Snow Crab", "Bar Food"],
      image: "deal-2.svg",
    },
    {
      id: 6,
      title: "Bella Trattoria",
      subtitle: "Pasta Night - All Pastas $10",
      price: "38.00",
      tags: ["Italian", "Pasta", "Dinner Special"],
      image: "deal-3.svg",
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  console.log("prevRef:", prevRef.current);
  console.log("nextRef:", nextRef.current);
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <div className="swiper-container flex justify-between">
      <button
        className="deals-nav-btn left-btn"
        aria-label="Previous"
        ref={prevRef}
      >
        <ChevronLeftIcon className="text-danger text-3xl lg:text-6xl cursor-pointer" />
      </button>
      <Swiper
        effect="coverflow"
        slidesPerView={2.7}
        breakpoints={{
          320: {
            slidesPerView: 1.6,
          },
          560: {
            slidesPerView: 2.3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        grabCursor
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: false,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          if (swiper) {
            setSwiperInstance(swiper);
          }
        }}
        loop
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        modules={[Navigation, EffectCoverflow]}
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            {({ isActive }) => (
              <div className="slide-content">
                <DealCard deal={deal} isActive={isActive} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={nextRef}
        className="deals-nav-btn right-btn"
        aria-label="Next"
      >
        <ChevronRightIcon className="text-danger text-3xl lg:text-6xl cursor-pointer" />
      </button>
    </div>
  );
}

export default SwiperCarousel;
