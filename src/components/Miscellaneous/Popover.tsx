import Demo from "../core/Demo";

export default function Popover() {
  return (
    <Demo
      label="Popover"
      code={`<div className="popover-trigger">
  <button>Click me</button>
  <div className="popover-content">
    Popover content
  </div>
</div>`}
    >
      <div className="popover-trigger">
        <button>Click me</button>
        <div className="popover-content">Popover content</div>
      </div>
    </Demo>
  );
}
