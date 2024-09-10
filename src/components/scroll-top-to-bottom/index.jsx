import React, {useRef} from 'react';
import {useFetch} from '../hooks/use-fetch';

const ScrollTopToBottom = () => {
  const bottomRef = useRef(null);
  const {data, loading, error} = useFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  );

  if (loading) return <h1>Loading data!. please wait.</h1>;
  if (error) return <div>{error}</div>;

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
      <h1>Scroll Top to Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{listStyle: 'none'}}>
        {data?.products?.length > 0
          ? data.products.map((product) => (
              <li key={product.key}>{product.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollTopToBottom;
