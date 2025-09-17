import { useState } from "react";
import Demo from "../core/Demo";

export default function DropdownSelect() {
  const [selectVal, setSelectVal] = useState("Option 1");

  return (
    <Demo
      label="Dropdown Select"
      code={`<select value={selectVal} onChange={e => setSelectVal(e.target.value)} className="input-select">
<option>Option 1</option>
<option>Option 2</option>
<option>Option 3</option>
</select>`}
    >
      <select
        value={selectVal}
        onChange={(e) => setSelectVal(e.target.value)}
        className="input-select"
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </Demo>
  );
}
