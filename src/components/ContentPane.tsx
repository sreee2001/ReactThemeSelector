import React from "react";

// Import your demo components
/* Inputs */
import TextInput from "../components/Inputs/TextInput";
import PasswordInputTypePassword from "../components/Inputs/PasswordInputTypePassword";
import PasswordInputTypeText from "../components/Inputs/PasswordInputTypeText";
import Checkbox from "../components/Inputs/Checkbox";
import RadioButtons from "../components/Inputs/RadioButtons";
import ToggleSwitch from "../components/Inputs/ToggleSwitch";

/* Buttons */

import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ButtonIcon from "../components/Buttons/ButtonIcon";

/* Selectors */

import DropdownSelect from "../components/Selectors/DropdownSelect";
import DatePicker from "../components/Selectors/DatePicker";

/* Display */

import Card from "../components/Display/Card";
import Alert from "../components/Display/Alert";
import Badge from "../components/Display/Badge";
import Avatar from "../components/Display/Avatar";
import ProgressBar from "../components/Display/ProgressBar";

/* Layout */

import Grid from "../components/Layout/Grid";
import Flexbox from "../components/Layout/Flexbox";
import Modal from "../components/Layout/Modal";
import Drawer from "../components/Layout/Drawer";

/* Navigation */

import Tabs from "../components/Navigation/Tabs";
import Pagination from "../components/Navigation/Pagination";
import Breadcrumbs from "../components/Navigation/Breadcrumbs";

/* Miscellaneous */

import Tooltip from "../components/Miscellaneous/Tooltip";
import Popover from "../components/Miscellaneous/Popover";
import Accordion from "../components/Miscellaneous/Accordion";
import Spinner from "../components/Miscellaneous/Spinner";

// ...add more imports as needed

type Props = {
  selectedKey: string;
};

export default function ContentPane({ selectedKey }: Props) {
  switch (selectedKey) {
    // Inputs
    case "TextInput":
      return <TextInput />;
    case "PasswordInputTypePassword":
      return <PasswordInputTypePassword />;
    case "PasswordInputTypeText":
      return <PasswordInputTypeText />;
    case "Checkbox":
      return <Checkbox />;
    case "RadioButtons":
      return <RadioButtons />;
    case "ToggleSwitch":
      return <ToggleSwitch />;
    // Buttons
    case "ButtonIcon":
      return <ButtonIcon />;
    case "ButtonPrimary":
      return <ButtonPrimary />;
    case "ButtonSecondary":
      return <ButtonSecondary />;
    // Selectors
    case "DropdownSelect":
      return <DropdownSelect />;
    case "DatePicker":
      return <DatePicker />;
    // Display
    case "Card":
      return <Card />;
    case "Alert":
      return <Alert />;
    case "Badge":
      return <Badge />;
    case "Avatar":
      return <Avatar />;
    case "ProgressBar":
      return <ProgressBar />;
    // Layout
    case "Drawer":
      return <Drawer />;
    case "Flexbox":
      return <Flexbox />;
    case "Grid":
      return <Grid />;
    case "Modal":
      return <Modal />;
    // Navigation
    case "Tabs":
      return <Tabs />;
    case "Pagination":
      return <Pagination />;
    case "Breadcrumbs":
      return <Breadcrumbs />;
    // Miscellaneous
    case "Tooltip":
      return <Tooltip />;
    case "Popover":
      return <Popover />;
    case "Accordion":
      return <Accordion />;
    case "Spinner":
      return <Spinner />;
    // ...add more cases as needed
    default:
      return (
        <div className="content-placeholder">
          Select an item from the navigation.
        </div>
      );
  }
}
