import fetch from "isomorphic-unfetch";

function Index(props) {
  console.log(props);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:5001/users");
  const data = await res.json();

  console.log(data);

  return {
    users: data.data.users,
  };
};

export default Index;
