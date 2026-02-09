import { useState, useCallback } from "react";
import { Modal } from "flowbite-react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ModalWrapper = useCallback(
    ({ children, size }) => (
      <Modal
        position="center"
        size={size}
        dismissible
        show={isOpen}
        onClose={close}
      >
        {children}
      </Modal>
    ),
    [isOpen, close]
  );

  return {
    isOpen,
    open,
    close,
    setIsOpen,
    Modal: ModalWrapper,
  };
}
