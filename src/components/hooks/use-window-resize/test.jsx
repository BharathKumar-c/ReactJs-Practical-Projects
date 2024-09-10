import React from 'react';
import {useWindowResize} from '.';

const TestWindowResizeHook = () => {
  const windowSize = useWindowResize();
  const {width, height} = windowSize;
  return (
    <div>
      <h1>Window Resize Value</h1>
      <div>
        <p>Window Width is : {width}</p>
        <p>Window Height is : {height}</p>
      </div>
    </div>
  );
};

export default TestWindowResizeHook;
