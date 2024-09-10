import React, {useRef} from 'react';

const data = [
  {
    label: 'First Card',
    style: {
      width: '100%',
      height: '600px',
      background: 'red',
    },
  },
  {
    label: 'Second Card',
    style: {
      width: '100%',
      height: '600px',
      background: 'blue',
    },
  },
  {
    label: 'Third Card',
    style: {
      width: '100%',
      height: '600px',
      background: 'yellow',
    },
  },
  {
    label: 'Fourth Card',
    style: {
      width: '100%',
      height: '600px',
      background: 'gray',
    },
  },
  {
    label: 'Fifth Card',
    style: {
      width: '100%',
      height: '600px',
      background: 'Green',
    },
  },
];

const ScrollToSection = () => {
  const myRef = useRef();
  function handleScrollToSec() {
    const pos = myRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section.</h1>
      <button onClick={handleScrollToSec}>Click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 4 ? myRef : null} key={index} style={item.style}>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
