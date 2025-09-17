import Demo from "../core/Demo";

export default function Flexbox() {
  return (
    <Demo
      label="Flexbox"
      code={`<div className="flexbox">
  <div className="flexbox-item">A</div>
  <div className="flexbox-item">B</div>
</div>`}
    >
      <div className="flexbox">
        <div className="flexbox-item">A</div>
        <div className="flexbox-item">B</div>
      </div>
    </Demo>
  );
}
