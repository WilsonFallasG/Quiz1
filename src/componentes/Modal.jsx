import React, { useState } from 'react';
import './styles.css';
function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubscribe = () => {
   
    console.log('Usuario suscrito al boletín');
    toggleModal();
  };

  return (
    <div>
      <button onClick={toggleModal}>Suscribirse al boletín</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Suscríbete a nuestro boletín</h2>
            <form>
              <label>
                Correo electrónico:
                <input type="email" />
              </label>
              <button type="button" onClick={handleSubscribe}>
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsletterModal;