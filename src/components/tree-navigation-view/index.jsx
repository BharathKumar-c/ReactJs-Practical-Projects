import React from 'react';
import TreeList from './TreeList';
import './style.css';

const TreeNavigationView = ({menu = []}) => {
  return (
    <div className="tree-menu-container">
      <TreeList list={menu} />
    </div>
  );
};

export default TreeNavigationView;
