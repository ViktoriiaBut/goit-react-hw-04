import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement(document.getElementById("root"));

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal className={s.modal} isOpen={isOpen} onRequestClose={onClose} overlayClassName={s.overlay}>
        { image && < img src={image} alt="Selected" className={s.modalImage}/> }
    </Modal>
  );
};

export default ImageModal;