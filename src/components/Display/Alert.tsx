import Demo from "../core/Demo";

export default function Alert() {
  return (
    <Demo
      label="Alert"
      code={`<div className="alert alert-error">
Error: Something went wrong!
</div>`}
    >
      <div className="alert alert-error">Error: Something went wrong!</div>
    </Demo>
  );
}
