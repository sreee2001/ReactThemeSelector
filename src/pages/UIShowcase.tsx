// import React, { useState } from "react";
import React from "react";
import "../styles/showcase.css";
import "../styles/theme.css";
import "../components/Header";
import Header from "../components/Header";

const UIShowcase: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <div className="showcase-split-container">
        <div className="showcase-split-container">
          <div className="split-left">
            <NavigationPanel
              selectedKey={selectedKey}
              onSelect={setSelectedKey}
            />
          </div>
          <div className="split-right">
            <ContentPane selectedKey={selectedKey} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UIShowcase;
