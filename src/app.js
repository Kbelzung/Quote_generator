import Quotebox from "/src_compiled_babel/quotebox.js";

("use strict");

class App extends React.Component {
  componentDidMount() {
    var colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    var color = Math.floor(Math.random() * colors.length);
    document.documentElement.style.setProperty("--main-color", colors[color]);
  }

  render() {
    return <Quotebox />;
  }
}

export default App;

const domContainer = document.querySelector("#app");
ReactDOM.render(<App />, domContainer);
