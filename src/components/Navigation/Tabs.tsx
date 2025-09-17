import { useState } from "react";
import Demo from "../core/Demo";

export default function Tabs() {
  const [tab, setTab] = useState(0);

  return (
    <Demo
      label="Tabs"
      code={`<div className="tabs">
  <button onClick={() => setTab(0)} className={tab === 0 ? "tab-active" : ""}>Tab 1</button>
  <button onClick={() => setTab(1)} className={tab === 1 ? "tab-active" : ""}>Tab 2</button>
</div>
<div>{tab === 0 ? "Tab 1 Content" : "Tab 2 Content"}</div>`}
    >
      <div className="tabs">
        <button
          onClick={() => setTab(0)}
          className={tab === 0 ? "tab-active" : ""}
        >
          Tab 1
        </button>
        <button
          onClick={() => setTab(1)}
          className={tab === 1 ? "tab-active" : ""}
        >
          Tab 2
        </button>
      </div>
      <div>{tab === 0 ? "Tab 1 Content" : "Tab 2 Content"}</div>
    </Demo>
  );
}
