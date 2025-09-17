import Demo from "../core/Demo";

export default function PasswordInputTypePassword() {
  return (
    <Demo
      label="Password Input"
      code={`<input type="password" className="input-password" placeholder="Enter password" />`}
    >
      <input
        type="password"
        className="input-password"
        placeholder="Enter password"
      />
    </Demo>
  );
}
