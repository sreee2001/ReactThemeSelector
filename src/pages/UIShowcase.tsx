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
/*
import Grid from "../components/Layout/Grid";
import Flexbox from "../components/Layout/Flexbox";
import Modal from "../components/Layout/Modal";
import Drawer from "../components/Layout/Drawer";
*/

/* Navigation */
/*
import Tabs from "../components/Navigation/Tabs";
import Pagination from "../components/Navigation/Pagination";
import Breadcrumbs from "../components/Navigation/Breadcrumbs";
*/

/* Miscellaneous */
/*
import Tooltip from "../components/Miscellaneous/Tooltip";
import Popover from "../components/Miscellaneous/Popover";
import Accordion from "../components/Miscellaneous/Accordion";
import Spinner from "../components/Miscellaneous/Spinner";
*/

const UIShowcase: React.FC = () => {
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

      {/*
      <h2>Layout</h2>
      <Grid />
      <Flexbox />
      <Modal />
      <Drawer />
      */}

      {/*
      <h2>Navigation</h2>
      <Tabs />
      <Pagination />
      <Breadcrumbs />
      */}

      {/*
        <h2>Miscellaneous</h2>
      <Tooltip />
      <Popover />
      <Accordion />
      <Spinner />
      */}
    </div>
  );
};

export default UIShowcase;
