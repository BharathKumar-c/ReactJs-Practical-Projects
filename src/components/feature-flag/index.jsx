import React, {useContext} from 'react';
import {FeatureFlagContext} from './context';
import LightDarkMode from '../light-dark-mode';
import TicTacToe from '../tic-tac-toe';
import RandomColor from '../random-color';
import TreeNavigationView from '../tree-navigation-view';
import menus from '../tree-navigation-view/data';
import CustomTabView from '../custom-tab-view';
import {tabs} from '../custom-tab-view/data';
import Accrodian from '../accrodian';

const FeatureFlags = () => {
  const {loading, enableFlag} = useContext(FeatureFlagContext);

  const renderComponent = [
    {
      key: 'showLightDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showRandomColor',
      component: <RandomColor />,
    },
    {
      key: 'showTreeNavigationView',
      component: <TreeNavigationView menu={menus} />,
    },
    {
      key: 'showCustomTabView',
      component: <CustomTabView tabContent={tabs} />,
    },
    {
      key: 'showAccrodian',
      component: <Accrodian />,
    },
  ];

  function checkFlagsEnable(getComponentKey) {
    return enableFlag[getComponentKey];
  }

  if (loading) return <h1>Loading data! please wait.</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {renderComponent.map((componentItem) =>
        checkFlagsEnable(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
