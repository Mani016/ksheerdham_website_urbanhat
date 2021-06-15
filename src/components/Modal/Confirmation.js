import React from "react";
import Modal from "../Modal";
const ConfirmationModal = (props) => {
  return (
    <Modal
      showClose={true}
      onClose={() => props.onCancel(false)}
      className="confirmation_modal"
      style={{ maxWidth: "500px" }}
    >
      <h3>Are you sure you want to delete ?</h3>

      <button className="green_btn">
        {" "}
        <i className="fa fa-trash" /> Delete
      </button>
    </Modal>
  );
};
export default ConfirmationModal;
