import React from "react";

const ServiceModal = ({ open, onClose, data }) => {
  if (!open || !data) return null;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div
        className="service-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="service-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3 id="service-modal-title">{data.title}</h3>

        <div className="service-modal-body">{data.content}</div>
      </div>
    </div>
  );
};

export default ServiceModal;
