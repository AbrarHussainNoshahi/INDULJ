import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { hotDealIcon, regularDealIcon, regularDealIcon2 } from "../../utils/leafletIcon";
import redIcon from "./../../utils/hot-deal-map.svg";
import greenIcon from "./../../utils/regular-deal-map2.svg";


// L.Marker.prototype.options.icon = DefaultIcon;

const deals = [
  { id: 1, title: "Taco Tuesday", price: "$3", position: [30.2672, -97.7431], isHot: true },
  { id: 2, title: "Burger Combo", price: "$9", position: [30.2731, -97.7472], isHot: false },
  { id: 3, title: "Happy Hour Drinks", price: "$5", position: [30.2619, -97.7398], isHot: true },
  { id: 4, title: "BBQ Plate", price: "$11", position: [30.2584, -97.7466], isHot: false },
  { id: 5, title: "Craft Beer", price: "$4", position: [30.2762, -97.7421], isHot: true },
  { id: 6, title: "Late Night Pizza", price: "$6", position: [30.2705, -97.7512], isHot: false },
  { id: 7, title: "Mexican Feast", price: "$10", position: [30.2556, -97.7404], isHot: true },
  { id: 8, title: "Cocktail Hour", price: "$7", position: [30.2748, -97.7369], isHot: false },
  { id: 9, title: "Wings Deal", price: "$8", position: [30.2637, -97.7535], isHot: true },
  { id: 10, title: "Vegan Bowl", price: "$9", position: [30.2592, -97.7355], isHot: false },
  { id: 11, title: "Dessert Night", price: "$5", position: [30.2783, -97.7459], isHot: true },
  { id: 12, title: "Coffee + Pastry", price: "$4", position: [30.2724, -97.7328], isHot: false },
  { id: 13, title: "Seafood Special", price: "$12", position: [30.2661, -97.7561], isHot: true },
  { id: 14, title: "Breakfast Combo", price: "$6", position: [30.2567, -97.7489], isHot: false },
  { id: 15, title: "Steak Night", price: "$15", position: [30.2795, -97.7391], isHot: true },
  { id: 16, title: "Smoothie Deal", price: "$5", position: [30.2624, -97.7312], isHot: false },
  { id: 17, title: "Sushi Roll", price: "$8", position: [30.2756, -97.7524], isHot: true },
  { id: 18, title: "Ice Cream Hour", price: "$4", position: [30.2578, -97.7339], isHot: false },
  { id: 19, title: "Pasta Night", price: "$10", position: [30.2812, -97.7447], isHot: true },
  { id: 20, title: "Brunch Deal", price: "$7", position: [30.2608, -97.7502], isHot: false }
];




const DealMap = ({fromPage=false}) => {
  return (
    <MapContainer
      center={[30.2672, -97.7431]}
      zoom={14.8}
      zoomSnap={0.5}
      scrollWheelZoom={false}
      className="h-full w-full rounded-2xl z-10"
      preferCanvas
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {deals.map((deal) => (
        <Marker
          key={deal.id}
          position={deal.position}
          icon={deal.isHot ? hotDealIcon : (fromPage ? regularDealIcon2 : regularDealIcon)}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">{deal.title}</p>
              <p
                className={
                  deal.isHot ? "font-semibold text-primary" : "text-gray-700"
                }
              >
                {deal.price}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
      {fromPage && <div className="w-[184px] h-[106px] flex flex-col items-center justify-around bg-white shadow absolute bottom-2 right-2 z-1000 rounded-2xl p-5">
        <div className="flex gap-3 text-[#434343] text-[16px] font-bold w-full">
          <img src={redIcon} alt="hot-deal-icon" className="w-4 mr-2" />
          Hot Deal
        </div>
        <div className="flex gap-3 text-[#434343] text-[16px] font-bold w-full">
          <img src={greenIcon} alt="hot-deal-icon" className="w-4 mr-2" />
          Regular Deal
        </div>
      </div>}
    </MapContainer>
  );
};

export default DealMap;
