import { useState } from "react";
import Button from "./Button";
import TabContent from "./TabContent";
import "./tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            label={tab.label}
            onClick={() => {
              handleClick(index);
            }}
            className={index === activeTab ? "active" : ""}
          />
        ))}
      </div>
      <div className="tabs-content">
        <TabContent
          duration={tabs[activeTab].duration}
          label={tabs[activeTab].label}
          content={tabs[activeTab].content}
          position={tabs[activeTab].position}
        />
      </div>
    </div>
  );
};

export default Tabs;
