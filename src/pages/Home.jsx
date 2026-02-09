import Hero from "../components/layout/Hero";
import HotDealsSection from "../components/layout/HotDeals";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";
import MapSection from "../components/layout/MapSection";
import DailyDealsSection from "../components/layout/DailyDealsSection";
import CtaSection from "../components/layout/CtaSection";
import Footer from "../components/layout/Footer";
import CartButton from "../components/ui/CartButton";

function Home() {
  return (
    <>
      <PageContainer>
        <Navbar icon={<CartButton count={1} />} />
      </PageContainer>
      <Hero
        image="hero-food.svg"
        title="Discover the Best Food & Drink Deals Near You"
        subtitle="Search restaurants, bars, happy hours and more in your area."
        showButtons={true}
      />
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
