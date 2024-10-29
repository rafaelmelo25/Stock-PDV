import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

function ProductsPage() {
  return (
    <div>
      <h1>Gerenciamento de Produtos</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default ProductsPage;
