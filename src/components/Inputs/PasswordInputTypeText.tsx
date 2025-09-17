import Demo from "../core/Demo";

export default function PasswordInputTypeText() {
  return (
    <Demo
      label="Password Input"
      code={`<input type="password" className="input-text" placeholder="Password" />`}
    >
      <input type="password" className="input-text" placeholder="Password" />
    </Demo>
  );
}
