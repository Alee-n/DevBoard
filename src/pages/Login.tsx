import { useState } from "react";

function Login() {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleLogin() {

    console.log(username);

    console.log(password);
  }

  return (
    <div>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;