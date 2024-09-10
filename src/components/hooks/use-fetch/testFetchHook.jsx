import React from 'react';
import {useFetch} from '.';

const TestUseFetchHook = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/products', {});
  if (loading) return <h1>Loading data! please wait.</h1>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Use Fetch Hooks</h1>
      {data?.products?.length > 0 &&
        data.products.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  );
};

export default TestUseFetchHook;
