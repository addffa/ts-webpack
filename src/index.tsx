import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import Clock from "./components/Clock";
import Card from "./components/Card";
import ButtonHandling from "./components/ButtonHandling";

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
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));