import { useState } from "react";
import Demo from "../core/Demo";

export default function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Demo
      label="Accordion"
      code={`<div>
  <button className="btn btn-secondary" onClick={() => setAccordionOpen(!accordionOpen)}>
    {accordionOpen ? "Hide" : "Show"} Accordion
  </button>
  {accordionOpen && <div className="accordion-content">
    Accordion content here!
  </div>}
</div>`}
    >
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {accordionOpen ? "Hide" : "Show"} Accordion
        </button>
        {accordionOpen && (
          <div className="accordion-content">Accordion content here!</div>
        )}
      </div>
    </Demo>
  );
}
