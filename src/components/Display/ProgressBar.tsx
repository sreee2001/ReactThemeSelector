import Demo from "../core/Demo";

export default function ProgressBar() {
  return (
    <Demo
      label="Progress Bar"
      code={`<div className="progress-bar">
        <div className="progress-bar-fill" style={{width: "60%"}} />
        </div>`}
    >
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: "60%" }} />
      </div>
    </Demo>
  );
}
