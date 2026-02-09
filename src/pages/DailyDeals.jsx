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
function DailyDeals() {
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
        <div className="mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
