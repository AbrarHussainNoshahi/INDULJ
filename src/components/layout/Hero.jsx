import Button from "../ui/Button";
import Pill from "../ui/Pill";
import PageContainer from "./PageContainer";

const Hero = ({image, title, subtitle, showButtons, className=''}) => {
  const bgImage = `${import.meta.env.BASE_URL}${image}`
  return (
    <section
      className={`relative lg:min-h-[570px] min-h-142 bg-cover lg:bg-center bg-right bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/50 lg:bg-transparent" />

      <PageContainer>
        <div className={`relative lg:min-h-[570px] min-h-142 flex items-center ${className}`}>
          <div className="max-w-2xl text-white">
            <Pill>Eat Smart, Save Smart</Pill>

            <h1 className="lg:mt-6 mt-4 text-3xl fluid-2xl lg:fluid-3xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-4 fluid-base xl:fluid-lg text-gray-200">
              {subtitle}
            </p>

            {showButtons && <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="danger" size="lg">
                Get Started
              </Button>

              <Button
                variant="success"
                size="lg"
              >
                View Deals
              </Button>
            </div>}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Hero;
