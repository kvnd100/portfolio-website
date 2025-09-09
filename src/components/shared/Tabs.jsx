import { useState } from "react";
import Button from "./Button";
import TabContent from "./TabContent";
import "./tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hideContent, setHideContent] = useState(false);

  const handleClick = (index) => {
    setActiveTab(index);
    setHideContent(true);

    setTimeout(() => {
      setHideContent(false);
    }, 200);
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
      <div className={`tabs-content ${hideContent ? "hidden" : ""}`}>
        <TabContent
          duration={tabs[activeTab].duration}
          label={tabs[activeTab].label}
          content={tabs[activeTab].content}
          position={tabs[activeTab].position}
          url={tabs[activeTab].url}
        />
      </div>
    </div>
  );
};

export default Tabs;
