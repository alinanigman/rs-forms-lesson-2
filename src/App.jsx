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
    resetState: () => setState(initialState),
  };
};

function App() {
  const { getState, updateState, resetState } = useStore();
  const sendData = (value) => {
    console.log("Form submitted with values:", value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(getState());
    resetState();
  };

  const { email, login, password } = getState();

  const onChange = ({ target }) => updateState(target.name, target.value);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={onChange}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="Enter your login"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={onChange}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
