import React from 'react';
import Modal from 'react-modal';

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Confirmar Exclusão"
    >
      <h2>Confirmar Exclusão</h2>
      <p>Tem certeza de que deseja excluir este anúncio?</p>
      <button onClick={onCancel}>Cancelar</button>
      <button onClick={onConfirm}>Confirmar</button>
    </Modal>
  );
};

export default DeleteConfirmationModal;