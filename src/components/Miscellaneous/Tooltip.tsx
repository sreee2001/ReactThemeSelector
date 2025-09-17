import Demo from "../core/Demo";

export default function Tooltip() {
  return (
    <Demo
      label="Tooltip"
      code={`<span className="tooltip">
  Hover me
  <span className="tooltip-text">Tooltip text</span>
</span>`}
    >
      <span className="tooltip">
        Hover me
        <span className="tooltip-text">Tooltip text</span>
      </span>
    </Demo>
  );
}
