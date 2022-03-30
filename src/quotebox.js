class Quotebox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <div id="text"></div>
        <div id="author">
          <p className="ms-auto fs-5">- Latin Proverb</p>
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
