import React, {useState} from 'react';
import './style.css';

const CustomTabView = ({tabContent}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (getCurrentTabIndex) => {
    setCurrentTabIndex(getCurrentTabIndex);
  };
  return (
    <div>
      <div className="tab-container">
        <div className="tab-navbar">
          {tabContent?.length &&
            tabContent.map((tabItem, index) => (
              <div
                key={index}
                className="tab-menu-btn"
                onClick={() => handleTabChange(index)}>
                {tabItem.label}
              </div>
            ))}
        </div>
        <div className="tab-content">
          {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
        </div>
      </div>
    </div>
  );
};

export default CustomTabView;
