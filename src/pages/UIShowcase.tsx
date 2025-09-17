import React, { useState } from "react";
import "../styles/showcase.css";
import "../styles/theme.css";
import "../components/Header";
import Demo from "../components/core/Demo";
import Header from "../components/Header";
/* Inputs 
import TextInput from "../components/Inputs/TextInput";
import PasswordInputTypePassword from "../components/Inputs/PasswordInputTypePassword";
import PasswordInputTypeText from "../components/Inputs/PasswordInputTypeText";
import Checkbox from "../components/Inputs/Checkbox";
import RadioButtons from "../components/Inputs/RadioButtons";
import ToggleSwitch from "../components/Inputs/ToggleSwitch";
*/

/* Buttons */
/*
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ButtonIcon from "../components/Buttons/ButtonIcon";
*/

/* Selectors */
/*
import DropdownSelect from "../components/Selectors/DropdownSelect";
import DatePicker from "../components/Selectors/DatePicker";
*/

/* Display */
/*
import Card from "../components/Display/Card";
import Alert from "../components/Display/Alert";
import Badge from "../components/Display/Badge";
import Avatar from "../components/Display/Avatar";
import ProgressBar from "../components/Display/ProgressBar";
*/

/* Layout */
import Grid from "../components/Layout/Grid";
import Flexbox from "../components/Layout/Flexbox";
import Modal from "../components/Layout/Modal";

const UIShowcase: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="showcase-container">
      <Header />

      {/*
      <h2>Inputs</h2>
      <TextInput />
      <PasswordInputTypePassword />
      <PasswordInputTypeText />
      <Checkbox />
      <RadioButtons />
      <ToggleSwitch />
      */}

      {/*
      <h2>Buttons</h2>
      <ButtonPrimary />
      <ButtonSecondary />
      <ButtonIcon />
      */}

      {/*
      <h2>Selectors</h2>
      <DropdownSelect />
      <DatePicker />
      */}

      {/*
      <h2>Display</h2>
      <Card />
      <Alert />
      <Badge />
      <Avatar />
      <ProgressBar />
      */}

      <h2>Layout</h2>
      <Grid />
      <Flexbox />
      <Modal />

      <Demo
        label="Drawer"
        code={`{drawerOpen && (
  <div className="drawer">
    <h3>Drawer Content</h3>
    <button className="btn btn-secondary" onClick={() => setDrawerOpen(false)}>Close</button>
  </div>
)}
<button className="btn btn-primary" onClick={() => setDrawerOpen(true)}>Open Drawer</button>`}
      >
        <button className="btn btn-primary" onClick={() => setDrawerOpen(true)}>
          Open Drawer
        </button>
        {drawerOpen && (
          <div className="drawer">
            <h3>Drawer Content</h3>
            <button
              className="btn btn-secondary"
              onClick={() => setDrawerOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </Demo>

      <h2>Navigation</h2>
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
      <Demo
        label="Pagination"
        code={`<div className="pagination">
  <button disabled>{"<"}</button>
  <button className="page-active">1</button>
  <button>2</button>
  <button>3</button>
  <button>{">"}</button>
</div>`}
      >
        <div className="pagination">
          <button disabled>{"<"}</button>
          <button className="page-active">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </Demo>
      <Demo
        label="Breadcrumbs"
        code={`<nav className="breadcrumbs">
  <span>Home</span> &gt; <span>Section</span> &gt; <span>Page</span>
</nav>`}
      >
        <nav className="breadcrumbs">
          <span>Home</span> &gt; <span>Section</span> &gt; <span>Page</span>
        </nav>
      </Demo>

      <h2>Miscellaneous</h2>
      <Demo
        label="Tooltip"
        code={`<span className="tooltip">
  Hover me
  <span className="tooltip-text">Tooltip text</span>
</span>`}
      >
        <span className="tooltip">
          Hover me
          <span className="tooltip-text">Tooltip text</span>
        </span>
      </Demo>
      <Demo
        label="Popover"
        code={`<div className="popover-trigger">
  <button>Click me</button>
  <div className="popover-content">
    Popover content
  </div>
</div>`}
      >
        <div className="popover-trigger">
          <button>Click me</button>
          <div className="popover-content">Popover content</div>
        </div>
      </Demo>
      <Demo
        label="Accordion"
        code={`<div>
  <button className="btn btn-secondary" onClick={() => setAccordionOpen(!accordionOpen)}>
    {accordionOpen ? "Hide" : "Show"} Accordion
  </button>
  {accordionOpen && <div className="accordion-content">
    Accordion content here!
  </div>}
</div>`}
      >
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => setAccordionOpen(!accordionOpen)}
          >
            {accordionOpen ? "Hide" : "Show"} Accordion
          </button>
          {accordionOpen && (
            <div className="accordion-content">Accordion content here!</div>
          )}
        </div>
      </Demo>
      <Demo label="Spinner" code={`<div className="spinner" />`}>
        <div className="spinner" />
      </Demo>
    </div>
  );
};

export default UIShowcase;
