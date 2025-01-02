import React, { useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  handleCloseModal: () => void;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ handleCloseModal, children }) => {
  const MODAL_REF = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isClickInsideModal =
        MODAL_REF.current && MODAL_REF.current.contains(event.target as Node);
      if (!isClickInsideModal) {
        handleCloseModal();
      }
    };

    const modalRoot = document.getElementById("root-modal");
    if (modalRoot) {
      // modalRoot.addEventListener("click", handleOutsideClick);
    }

    return () => {
      if (modalRoot) {
        modalRoot.removeEventListener("click", handleOutsideClick);
      }
    };
  }, [handleCloseModal]);

  const modalRoot = document.getElementById("root-modal");
  if (!modalRoot) {
    console.error("The element with id 'root-modal' was not found in the DOM.");
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-container" ref={MODAL_REF} id="modal-container">
      <div className="modal-content" id="modal-content">
        <span className="btn-modal-close" onClick={handleCloseModal}>
          <IoMdClose />
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
