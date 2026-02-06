import SearchInput from "./../ui/SearchInput";
import DailyDealItem from "./../ui/DailyDealItem";
import { FiSearch } from "react-icons/fi";
// import DealsNavButton from "./DealsNavButton";

const dailyDeals = [
 {
    id: 1,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  },
  {
    id: 2,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  },
  {
    id: 3,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  },
  {
    id: 4,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  },
  {
    id: 5,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  },
  {
    id: 6,
    title: "New Lilikoi Margarita",
    description: "High melt cheese, bacon, oak...",
    price: "$45.00",
    image: "deal-1.svg",
    tags: ["Pizza", "Bar", "Grill"]
  }
]

export default function DailyDealsSection({ deals = dailyDeals }) {
  return (
    <section className=" py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex lg:flex-row items-center lg:justify-between flex-col sm:justify-center mb-8">
          <h2 className="text-3xl font-bold text-dark">
            Daily Deals List
          </h2>
          <SearchInput icon={FiSearch} placeholder='Search Food' buttonTxt='Search' />
        </div>

        <div className="relative">
          {/* <DealsNavButton direction="left" /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-14">
            {deals.slice(0, 6).map(deal => (
              <DailyDealItem key={deal.id} deal={deal} />
            ))}
          </div>

          {/* <DealsNavButton direction="right" /> */}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="border font-semibold border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-danger hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
