import React, {useState} from 'react';
import TreeList from './TreeList';
import {FaPlus, FaMinus} from 'react-icons/fa';

const TreeItem = ({item}) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToogleMenuItems = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item?.children?.length ? (
          <span onClick={() => handleToogleMenuItems(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={25} />
            ) : (
              <FaPlus size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item?.children?.length && displayCurrentChildren[item.label] ? (
        <TreeList list={item.children} />
      ) : null}
    </li>
  );
};

export default TreeItem;
