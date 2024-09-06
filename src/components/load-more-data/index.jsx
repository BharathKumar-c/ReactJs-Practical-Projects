import React, {useCallback, useEffect, useState} from 'react';
import './style.css';

const LoadMoreData = ({limit = 10}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [diableBtn, setDisableBtn] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          count === 0 ? 0 : count * limit
        }`
      );
      const result = await response.json();
      if (result) setProducts((prev) => [...prev, ...result.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [count, limit]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  console.log(products.length);

  if (loading) return <div>Loading products! Please wait.</div>;

  return (
    <div className="container">
      <div className="products">
        {products &&
          products.length &&
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img alt={product.title} src={product.thumbnail} />
              <p>{product.title}</p>
            </div>
          ))}
      </div>
      <div className="btn-container">
        <button
          type="button"
          disabled={diableBtn}
          onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {diableBtn && <div>You reached 100 products.</div>}
      </div>
    </div>
  );
};

export default LoadMoreData;
