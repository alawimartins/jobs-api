import React from 'react';
import * as Styled from './modal.styles.js'

const Modal = ({ showModal, setShowModal }) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal ? (
        <Styled.ModalBackground onClick={closeModal}>
          <Styled.Modal>
            <h1>Are you ready?</h1>
          </Styled.Modal>
        </Styled.ModalBackground>
      ) : null}
    </>
  );
};

export default Modal