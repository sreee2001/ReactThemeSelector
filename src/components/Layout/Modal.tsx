import { useState } from "react";
import Demo from "../core/Demo";

export default function Flexbox() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Demo
      label="Modal"
      code={`{modalOpen && (
<div className="modal-overlay">
<div className="modal">
  <h3>Modal Title</h3>
  <button className="btn btn-secondary" onClick={() => setModalOpen(false)}>Close</button>
</div>
</div>
)}
<button className="btn btn-primary" onClick={() => setModalOpen(true)}>Open Modal</button>`}
    >
      <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Modal Title</h3>
            <button
              className="btn btn-secondary"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Demo>
  );
}
