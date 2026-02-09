import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import PlanHappyHour from "./pages/PlanHappyHour";
import Map from "./pages/Map";
import DailyDeals from "./pages/DailyDeals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
    <BrowserRouter basename="/INDULJ">

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/daily-deals" element={<DailyDeals />} />
        <Route path="/map" element={<Map />} />
        <Route path="/plan-happy-hour" element={<PlanHappyHour />} />

      </Routes>
    </BrowserRouter>
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
  );
}

export default App;
