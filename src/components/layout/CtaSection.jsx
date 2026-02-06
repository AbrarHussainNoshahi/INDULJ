import { useState } from "react";
import CtaCard from "../cards/CtaCard";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import SubmitDealForm from "../ui/SubmitDealForm";

export default function CtaSection() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <CtaCard
            title="Submit a Deal"
            description="Know about a great deal? Let us know!"
            buttonText="Submit a Deal"
            variant="dark"
            onClick={() => setOpenModal(true)}
          />

          <CtaCard
            title="Plan My Happy Hour"
            description="We'll help organize your night out or team event."
            buttonText="Get Started"
            variant="danger"
          />
        </div>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalBody>
          <SubmitDealForm setOpenModal={setOpenModal}/>
        </ModalBody>
      </Modal>
    </section>
  );
}
