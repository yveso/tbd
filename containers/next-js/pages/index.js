import fetch from "isomorphic-unfetch";
import AddUser from "../components/AddUser";
import UsersList from "../components/UsersList";

async function getUsers() {
  const res = await fetch("http://localhost:5001/users");
  const data = await res.json();

  return data.data.users;
}

function Index(props) {
  const [users, setUsers] = React.useState(props.users);

  function update() {
    getUsers().then(newUsers => setUsers(newUsers));
  }

  return (
    <div>
      <AddUser update={update} />
      <UsersList users={users} />
    </div>
  );
}

Index.getInitialProps = async function() {
  const users = await getUsers();

  return {
    users,
  };
};

export default Index;
