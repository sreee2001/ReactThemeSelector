import { useState } from "react";
import Demo from "../core/Demo";

export default function ToggleSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Demo
      label="Switch (Toggle)"
      code={`<label className="switch">
  <input
    type="checkbox"
    checked={switchOn}
    onChange={e => setSwitchOn(e.target.checked)}
    className="switch-input"
  />
  <span className={"switch-slider" + (switchOn ? " switch-on" : "")}></span>
</label>`}
    >
      <label className="switch">
        <input
          type="checkbox"
          checked={switchOn}
          onChange={(e) => setSwitchOn(e.target.checked)}
          className="switch-input"
        />
        <span
          className={"switch-slider" + (switchOn ? " switch-on" : "")}
        ></span>
      </label>
    </Demo>
  );
}
