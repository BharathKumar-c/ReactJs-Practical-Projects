import React, {useEffect, useState} from 'react';
import './style.css';

const ScrollIndicator = ({url}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  async function fetchProduct(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result?.products?.length) {
        setProducts(result.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log('body scroll top', document.body.scrollTop);
    // console.log('element scroll top', document.documentElement.scrollTop);
    // console.log('Scroll scroll height', document.documentElement.scrollHeight);
    // console.log('Client scroll height', document.documentElement.clientHeight);

    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const screenHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setProgressPercentage((howMuchScroll / screenHeight) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (errorMsg) {
    return (
      <div>
        Error occures ! <br /> <p>{errorMsg}</p>
      </div>
    );
  }

  if (loading) {
    <div>Loading data! please wait...</div>;
  }

  return (
    <div>
      <div className="topbar">
        <h2>Custom Scroll Indicator</h2>
        <div className="scroll-progress-container">
          <div
            className="current-progress"
            style={{width: `${progressPercentage}%`}}
          />
        </div>
      </div>
      <section className="content-section">
        {products?.length
          ? products.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </section>
    </div>
  );
};

export default ScrollIndicator;
