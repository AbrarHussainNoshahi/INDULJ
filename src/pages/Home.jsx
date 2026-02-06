import Hero from "../components/layout/Hero";
import HotDealsSection from "../components/layout/HotDeals";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";
import MapSection from "../components/layout/MapSection";
import DailyDealsSection from "../components/layout/DailyDealsSection";
import CtaSection from "../components/layout/CtaSection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <PageContainer>
        <Navbar />
      </PageContainer>
      <Hero />
      <HotDealsSection />
      <MapSection />
      <PageContainer>
        <DailyDealsSection />
        <CtaSection />
      </PageContainer>
      <Footer />
    </>
  );
}

export default Home;
