import React, { useState } from 'react';
import './styles.css';

function Modal() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Bienvenidos al curso de Multimedia</h2>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    )
  );
}

export default Modal;
