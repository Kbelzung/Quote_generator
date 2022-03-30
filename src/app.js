import Quotebox from "/src_compiled_babel/quotebox.js";

("use strict");

class App extends React.Component {
  render() {
    return <Quotebox />;
  }
}

export default App;

const domContainer = document.querySelector("#app");
ReactDOM.render(<App />, domContainer);
