import { useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  login: "",
  password: "",
};

const useStore = () => {
  const [state, setState] = useState(initialState);

  return {
    getState: () => state,
    updateState: (fieldName, newValue) => {
      setState({ ...state, [fieldName]: newValue });
    },
  };
};

function App() {
  const { getState, updateState } = useStore();
  const sendData = (value) => {
    console.log("Form submitted with values:", value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(getState());
  };

  const { email, login, password } = getState();

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={({ target }) => updateState("email", target.value)}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="Enter your login"
          onChange={({ target }) => updateState("login", target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={({ target }) => updateState("password", target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
