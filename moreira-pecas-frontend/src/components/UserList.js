import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
