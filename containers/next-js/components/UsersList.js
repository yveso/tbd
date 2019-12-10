function UsersList({ users }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map(user => <li key={user.id}>{user.username}</li>)}
      </ul>
    </>
  );
}

export default UsersList;
