import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import Clock from "./components/Clock";
import Card from "./components/Card";
import ButtonHandling from "./components/ButtonHandling";
import LoginControl from "./components/LoginControl";
import Movies from "./components/Movies";

const Index = () => {
  return (
    <div>
      <App />
      <Clock
        children={<Card title="week1" content="learn typescript"/>}
      />
      <ButtonHandling
        children={<App />}
      />
      <LoginControl />
      <Movies />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));