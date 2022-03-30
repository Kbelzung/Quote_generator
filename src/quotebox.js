class Quotebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: null,
      author: null,
    };
  }

  componentDidMount() {
    fetch("https://zenquotes.io/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * 48);
        this.setState({
          quoteText: data[randomNumber].q,
          author: data[randomNumber].a,
        });
      });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <i id="quote-mark" class="fa fa-quote-left"></i>{" "}
          {this.state.quoteText}
        </div>
        <div id="author">
          <p className="ms-auto fs-5">{this.state.author}</p>
        </div>
        <div id="social-row">
          <button
            id="tweet-quote"
            type="button"
            className="btn btn-primary me-1"
          >
            <i className="fa fa-twitter"></i>
          </button>
          <button id="twitter-quote" type="button" className="btn btn-primary">
            <i className="fa-brands fa-tumblr"></i>
          </button>
          <button
            id="new-quote"
            type="button"
            className="btn btn-primary ms-auto"
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quotebox;
