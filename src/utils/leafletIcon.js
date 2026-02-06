import L from "leaflet";
import redIcon from "./hot-deal-map.svg";
import blackIcon from "./regular-deal-map.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export const hotDealIcon = L.icon({
  iconUrl: redIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

export const regularDealIcon = L.icon({
  iconUrl: blackIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});
