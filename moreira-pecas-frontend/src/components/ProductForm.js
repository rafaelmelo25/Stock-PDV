import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    code: '',
    manufacturer: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', product)
      .then(response => {
        console.log('Produto adicionado com sucesso', response.data);
      })
      .catch(error => console.error('Erro ao adicionar produto:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text" name="name" onChange={handleChange} value={product.name} required />

      <label>Código:</label>
      <input type="text" name="code" onChange={handleChange} value={product.code} required />

      <label>Fabricante:</label>
      <input type="text" name="manufacturer" onChange={handleChange} value={product.manufacturer} required />

      <label>Preço:</label>
      <input type="number" name="price" onChange={handleChange} value={product.price} required />

      <label>Estoque:</label>
      <input type="number" name="stock" onChange={handleChange} value={product.stock} required />

      <button type="submit">Salvar</button>
    </form>
  );
}

export default ProductForm;
