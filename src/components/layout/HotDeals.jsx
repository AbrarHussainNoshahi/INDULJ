import { Swiper, SwiperSlide } from "swiper/react";
import DealCard from "../cards/DealCard";
import PageContainer from "./PageContainer";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "flowbite-react";

function HotDeals() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
  return (
    <PageContainer className="py-3">
      <h2 className="py-2 my-4 text-dark text-center font-bold text-2xl lg:text-3xl">
        Top Picks / Hot Deals
      </h2>
      <div className="deals-nav flex justify-between">
        <button
          ref={prevRef}
          className="deals-nav-btn left-btn"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="text-danger text-3xl lg:text-6xl cursor-pointer" />
        </button>

        {/* <Swiper
          effect={"coverflow"}
          loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          breakpoints={{
            340:{
              slidesPerView: 'auto',
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 40,
            },
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 100,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.8,
          }}
          autoplay={true}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onSwiper={(swiper) => {
            if (swiper) {
              setSwiperInstance(swiper);
            }
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="deals-swiper"
        >
          {deals.map((deal) => (
            <SwiperSlide key={deal.id}>
              {({ isActive }) => <DealCard deal={deal} isActive={isActive} />}
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper
          navigation={true}
          effect="coverflow"
          slidesPerView={1.2}
          breakpoints={{
            560: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
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
          modules={[Navigation, EffectCoverflow, Pagination]}
        >
          {deals.map((deal) => (
            <SwiperSlide>
              <div className="slide-content">
                <DealCard deal={deal} isActive={true} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
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
          modules={[Navigation, EffectCoverflow, Pagination]}
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
      <div className="deals-pagination" ref={paginationRef} />
    </PageContainer>
  );
}

export default HotDeals;
