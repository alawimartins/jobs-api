import React from 'react';
import * as Styled from './modal.styles.js'

const Modal = ({ showModal, setShowModal }) => {

  const closeModal = () => {
    setShowModal(false)
  }
  // TODO: still need to work on Modal component
  return (
    <>
      {showModal ? (
        <Styled.ModalBackground onClick={closeModal}>
          <Styled.Modal>
            <h1>Not finished yet</h1>
          </Styled.Modal>
        </Styled.ModalBackground>
      ) : null}
    </>
  );
};

export default Modal