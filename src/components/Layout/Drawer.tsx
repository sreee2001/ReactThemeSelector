import { useState } from "react";
import Demo from "../core/Demo";

export default function Drawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Demo
      label="Drawer"
      code={`{drawerOpen && (
  <div className="drawer">
    <h3>Drawer Content</h3>
    <button className="btn btn-secondary" onClick={() => setDrawerOpen(false)}>Close</button>
  </div>
)}
<button className="btn btn-primary" onClick={() => setDrawerOpen(true)}>Open Drawer</button>`}
    >
      <button className="btn btn-primary" onClick={() => setDrawerOpen(true)}>
        Open Drawer
      </button>
      {drawerOpen && (
        <div className="drawer">
          <h3>Drawer Content</h3>
          <button
            className="btn btn-secondary"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </Demo>
  );
}
