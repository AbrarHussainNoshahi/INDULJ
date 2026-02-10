import PageContainer from "./PageContainer";
import Button from "../ui/Button";
import DealMap from "../map/DealsMap";
import useInViewOnce from "../../hooks/useInViewOnce";

function MapSection() {
  const { ref, inView } = useInViewOnce();
  return (
    <section className="py-3 bg-white">
      <PageContainer>
        <h2 className="py-2 my-4 font-bold text-2xl lg:text-3xl text-dark">Find Your Deals</h2>
        <div
          ref={ref}
          className="relative h-[420px] overflow-hidden bg-gray-100"
        >
          {inView ? (
            <DealMap fromPage={false} />
          ) : (
            <div className="flex h-full items-center justify-center text-muted">
              Loading map…
            </div>
          )}
        </div>
        <Button variant="primary" className="mx-auto block mt-4" size="full">View a Map of Your Deals</Button>
      </PageContainer>
    </section>
  );
}

export default MapSection;
