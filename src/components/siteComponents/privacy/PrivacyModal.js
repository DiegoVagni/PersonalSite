import React from "react";
import Modal from "../../general/Modal/Modal";
import Locale from "../../../utils/Locale";
import TextsStyle from "../../../scss/Texts.module.scss";

const PrivacyModal = ({ show, onClose, root }) => (
  <Modal show={show} handleClose={onClose} height root={root}>
    <h2 className={TextsStyle.SubTitleText}>{Locale.GetMessages("privacy_title")}</h2>
    <p className={TextsStyle.ParagText}>{Locale.ParseMessage(Locale.GetMessages("privacy"))}</p>
  </Modal>
);

export default PrivacyModal;
