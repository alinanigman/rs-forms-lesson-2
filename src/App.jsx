import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    login: "",
    password: "",
  });

  const sendData = (value) => {
    console.log("Form submitted with values:", value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(formData);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={({ target }) =>
            setFormData({ ...formData, email: target.value })
          }
        />
        <input
          type="text"
          name="login"
          value={formData.login}
          placeholder="Enter your login"
          onChange={({ target }) =>
            setFormData({ ...formData, login: target.value })
          }
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={({ target }) =>
            setFormData({ ...formData, password: target.value })
          }
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
