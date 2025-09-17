import Demo from "../core/Demo";

export default function TextInput() {
  return (
    <Demo
      label="Text Input"
      code={`<input type="text" className="input-text" placeholder="Enter text" />`}
    >
      <input type="text" className="input-text" placeholder="Enter text" />
    </Demo>
  );
}
