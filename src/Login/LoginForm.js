import React, { useState } from "react";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        className="input"
        name="username"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        value={username}
        required
      />
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        required
      />

      <button className="button">LOGIN</button>
    </form>
  );
}
