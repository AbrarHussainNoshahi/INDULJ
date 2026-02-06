import { Toaster } from "react-hot-toast";
import ImageSlider from "./components/layout/ImageSlider";
import SwiperCarousel from "./components/layout/SwiperCarousel";
import SubmitDealForm from "./components/ui/SubmitDealForm";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Home />
    <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#FF4D4D",
              secondary: "white",
            }
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
    // <SubmitDealForm />
    // <SwiperCarousel />
    // <ImageSlider />
  );
}

export default App;
