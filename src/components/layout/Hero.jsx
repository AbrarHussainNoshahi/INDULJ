import Button from "../ui/Button";
import Pill from "../ui/Pill";
import PageContainer from "./PageContainer";

const Hero = () => {
  return (
    <section
      className="relative lg:min-h-[570px] min-h-142 bg-cover lg:bg-center bg-right bg-no-repeat "
      style={{
        backgroundImage: "url('hero-food.svg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/50 lg:bg-transparent" />

      <PageContainer>
        <div className="relative lg:min-h-[570px] min-h-142 flex items-center">
          <div className="max-w-2xl text-white">
            <Pill>Eat Smart, Save Smart</Pill>

            <h1 className="lg:mt-6 mt-4 text-3xl md:text-5xl font-bold leading-tight lg:text-5xl">
              Discover the Best Food & Drink Deals Near You
            </h1>

            <p className="mt-4 text-[18px] text-gray-200">
              Search restaurants, bars, happy hours and more in your area.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="danger" size="lg">
                Get Started
              </Button>

              <Button
                variant="success"
                size="lg"
              >
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Hero;
