import React, {useCallback, useEffect, useRef, ReactNode} from "react";
import ReactDOM from "react-dom";
import ModalStyles from "./ModalStyle";

interface ModalProps {
  children: ReactNode;
  show: boolean;
  handleShow: (show: boolean) => void;
  className?: string;
  modalTitle?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  show = false,
  handleShow,
  className = "",
  modalTitle = "",
}) => {
  const classes = ModalStyles({});
  const portalEl =
    typeof document !== "undefined"
      ? document.getElementById("modal-root")
      : null;
  const modal = useRef<HTMLDivElement>(null);

  const handleEventKeyup = useCallback(
    (e: KeyboardEvent) => {
      const keys = [27];
      if (keys.includes(e.keyCode) && show) {
        e.preventDefault();
        handleShow(false);
      }
    },
    [handleShow, show],
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        modal &&
        modal.current &&
        !modal.current.contains(e.target as Node) &&
        show
      ) {
        e.preventDefault();
        handleShow(false);
      }
    },
    [handleShow, show],
  );

  useEffect(() => {
    if (typeof document !== "undefined" && show) {
      window.addEventListener("keyup", handleEventKeyup, false);
      document.addEventListener("click", handleClickOutside, false);

      return () => {
        window.removeEventListener("keyup", handleEventKeyup, false);
        document.removeEventListener("click", handleClickOutside, false);
      };
    }
  }, [handleEventKeyup, handleClickOutside, show]);

  if (typeof document !== "undefined" && show && portalEl) {
    return ReactDOM.createPortal(
      <div className={classes.modalOverlay}>
        <div className={`${classes.modal} ${className}`} ref={modal}>
          <div className="modal_header_wrapper">
            <h3 className="modal__title">{modalTitle}</h3>
            <button
              className={classes.closeButton}
              onClick={() => handleShow(false)}
            >
              ×
            </button>
          </div>
          {children}
        </div>
      </div>,
      portalEl as Element,
    );
  }

  // Fallback for server-side rendering or when show is false
  return null;
};

export default React.memo(Modal);
