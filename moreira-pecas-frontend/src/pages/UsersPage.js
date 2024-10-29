import React from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

function UsersPage() {
  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default UsersPage;
