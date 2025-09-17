import { useState } from "react";
import Demo from "../core/Demo";

export default function RadioButtons() {
  const [radio, setRadio] = useState("A");

  return (
    <Demo
      label="Radio Buttons"
      code={`<label>
<input
type="radio"
name="group"
checked={radio === "A"}
onChange={() => setRadio("A")}
className="input-radio"
/>
Option A
</label>
<label>
<input
type="radio"
name="group"
checked={radio === "B"}
onChange={() => setRadio("B")}
className="input-radio"
/>
Option B
</label>`}
    >
      <label>
        <input
          type="radio"
          name="group"
          checked={radio === "A"}
          onChange={() => setRadio("A")}
          className="input-radio"
        />
        Option A
      </label>
      <label style={{ marginLeft: 16 }}>
        <input
          type="radio"
          name="group"
          checked={radio === "B"}
          onChange={() => setRadio("B")}
          className="input-radio"
        />
        Option B
      </label>
    </Demo>
  );
}
