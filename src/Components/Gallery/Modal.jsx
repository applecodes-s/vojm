import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, closeModal, imageSrc }) => {
    const [visible, setVisible] = useState(false);

    // Handle opening and closing animations
    useEffect(() => {
        let timeoutId;

        if (isOpen) {
            // Trigger fade-in
            requestAnimationFrame(() => setVisible(true));
        } else {
            // Trigger fade-out, then fully close after animation
            setVisible(false);
            timeoutId = setTimeout(() => {
                setVisible(false);
            }, 300); // match CSS transition duration
        }

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeModal]);

    if (!isOpen && !visible) return null;

    return (
        <div
            className={`modal-overlay ${visible ? 'show' : ''}`}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`modal-content ${visible ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={closeModal}>
                    ×
                </button>
                <img src={imageSrc} alt="Modal content" className="modal-image" />
            </div>
        </div>
    );
};

export default Modal;
