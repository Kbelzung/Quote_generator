import Quotebox from "/src_compiled_babel/quotebox.js";

("use strict");

const e = React.createElement;

class App extends React.Component {
  render() {
    return <Quotebox />;
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);

fetch("https://zenquotes.io/api/quotes")
  .then((res) => res.json())
  .then((data) => {
    let randomNumber = Math.floor(Math.random() * 48);
    document.getElementById("text").innerHTML =
      '<i id="quote-mark" class="fa fa-quote-left"></i>' + data[randomNumber].q;
    document.getElementById("author").innerHTML = data[randomNumber].a;
  });

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
