import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const sendData = (formData) => {
    console.log("Form submitted with values:", formData);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, login, password });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="Enter your login"
          onChange={({ target }) => setLogin(target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
