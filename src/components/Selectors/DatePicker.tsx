import Demo from "../core/Demo";

export default function DatePicker() {
  return (
    <Demo
      label="Date Picker (native)"
      code={`<input type="date" className="input-date" />`}
    >
      <input type="date" className="input-date" />
    </Demo>
  );
}
