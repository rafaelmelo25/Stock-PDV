import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'funcionario'
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users', user)
      .then(response => {
        console.log('Usuário cadastrado com sucesso', response.data);
      })
      .catch(error => console.error('Erro ao cadastrar usuário:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text" name="name" onChange={handleChange} value={user.name} required />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} value={user.email} required />

      <label>Senha:</label>
      <input type="password" name="password" onChange={handleChange} value={user.password} required />

      <label>Função:</label>
      <select name="role" onChange={handleChange} value={user.role}>
        <option value="admin">Admin</option>
        <option value="funcionario">Funcionário</option>
      </select>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default UserForm;
