import React from 'react';
import TreeItem from './TreeItem';
import {LiaGalacticRepublic} from 'react-icons/lia';

const TreeList = ({list = []}) => {
  return (
    <div>
      <ul className="menu-list-container">
        {list && list.length
          ? list.map((listItem, index) => (
              <TreeItem key={index} item={listItem} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default TreeList;
