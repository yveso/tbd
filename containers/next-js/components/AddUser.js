function AddUser(props) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }

  function add(event) {
    event.preventDefault();
    const data = { username, email, password };
    fetch("http://localhost:5001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => {
        setError(json.status === "fail" ? json.message : "");
        setUsername("");
        setEmail("");
        setPassword("");
        props.update();
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <h1>Add User</h1>
      {error && <p>{error}</p>}
      <form onSubmit={event => add(event)}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          required
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="Email address"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddUser;
