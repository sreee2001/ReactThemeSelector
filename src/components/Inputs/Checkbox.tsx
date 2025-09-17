import { useState } from "react";
import Demo from "../core/Demo";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Demo
      label="Checkbox"
      code={`<input 
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        className="input-checkbox"
      />`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="input-checkbox"
      />{" "}
      Checked: {checked ? "True" : "False"}
    </Demo>
  );
}
