import Demo from "../core/Demo";

export default function Card() {
  return (
    <Demo
      label="Card"
      code={`<div className="card">
<h3>Card Title</h3>
<p>Card content goes here.</p>
</div>`}
    >
      <div className="card">
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </div>
    </Demo>
  );
}
