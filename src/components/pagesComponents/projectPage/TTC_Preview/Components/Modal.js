import react from "react";
import Button from "./Button";
import "./../css/modal.css";
//conosco i functional components in react ma personalmente mi trovo meglio con le classi.
const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          {props.children}
          <Button className="modal-button" clickhandler={props.handleClose}>
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
