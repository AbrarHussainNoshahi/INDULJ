import CtaCard from "../cards/CtaCard";
import SubmitDealForm from "../../features/SubmitDealForm";
import { useModal } from "../../hooks/useModal";
import { ModalBody } from "flowbite-react";

export default function CtaSection() {
  const {Modal, setIsOpen} = useModal();
  
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <CtaCard
            title="Submit a Deal"
            description="Know about a great deal? Let us know!"
            buttonText="Submit a Deal"
            variant="dark"
            onClick={() => setIsOpen(true)}
          />

          <CtaCard
            title="Plan My Happy Hour"
            description="We'll help organize your night out or team event."
            buttonText="Get Started"
            variant="danger"
          />
        </div>
      </div>

      <Modal size='4xl'>
        <ModalBody>
          <SubmitDealForm setOpenModal={setIsOpen}/>
        </ModalBody>
      </Modal>
    </section>
  );
}
