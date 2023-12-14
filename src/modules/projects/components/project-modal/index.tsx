import Modal from "@modules/common/modal";

interface IProjectModal {
  children: React.ReactNode;
  handleShow: React.Dispatch<React.SetStateAction<boolean>>;
  show?: boolean;
  className?: string;
  modalTitle?: string;
}

const ProjectModal = ({children, handleShow, show = false}: IProjectModal) => {
  if (show === false) return null;

  return (
    <Modal
      show
      handleShow={handleShow}
      className="your-custom-class"
      modalTitle="Your Modal Title"
    >
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </Modal>
  );
};

export default ProjectModal;