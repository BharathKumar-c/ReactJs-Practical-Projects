import React, {useRef, useState} from 'react';
import {useOutSideClick} from '.';

const TestOutSideClick = () => {
  const [showContent, setShowContent] = useState(false);
  const myRef = useRef();
  useOutSideClick(myRef, () => setShowContent(false));

  return (
    <div style={{margin: '20px'}}>
      {showContent ? (
        <div ref={myRef}>
          <h1>This is random content</h1>
          <p>
            Please click outside of the content then it would be close. It won't
            close inside of the content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default TestOutSideClick;
