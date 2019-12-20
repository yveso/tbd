import fetch from "isomorphic-unfetch";
import UsersList from "../components/UsersList";

async function getUsers() {
  const url = typeof window === "undefined" ? "api:5000" : "localhost:5001";
  const res = await fetch(`http://${url}/users`);
  const data = await res.json();

  return data.data.users;
}

function Users(props) {
  const [users, setUsers] = React.useState(props.users);

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
}

Users.getInitialProps = async function() {
  const users = await getUsers();

  return {
    users,
  };
};

export default Users;
