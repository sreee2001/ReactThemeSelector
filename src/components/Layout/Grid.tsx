import Demo from "../core/Demo";

export default function Grid() {
  return (
    <Demo
      label="Grid"
      code={`<div className="grid">
<div className="grid-item">1</div>
<div className="grid-item">2</div>
<div className="grid-item">3</div>
</div>`}
    >
      <div className="grid">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
      </div>
    </Demo>
  );
}
