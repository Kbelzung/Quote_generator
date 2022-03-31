class Quotebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: null,
      author: null,
    };

    this.updateQuote = this.updateQuote.bind(this);
    this.sendQuoteTwitter = this.sendQuoteTwitter.bind(this);
    this.sendQuoteTumblr = this.sendQuoteTumblr.bind(this);
    this.copyQuote = this.copyQuote.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
  }

  updateQuote() {
    fetch("https://zenquotes.io/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * 48);
        this.setState({
          quoteText: data[randomNumber].q,
          author: data[randomNumber].a,
        });
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
  }

  sendQuoteTwitter() {
    window.location.href =
      "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      encodeURIComponent('"' + this.state.quoteText + '" ' + this.state.author);
  }

  sendQuoteTumblr() {
    window.location.href =
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" +
      encodeURIComponent(this.state.quoteText) +
      "&content=" +
      encodeURIComponent(this.state.author) +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
  }

  copyQuote() {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(
      this.state.quoteText + " - " + this.state.author
    );

    /* Alert the copied text */
    alert(
      "Copied the text: " + this.state.quoteText + " - " + this.state.author
    );
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <i id="quote-mark" className="fa fa-quote-left"></i>{" "}
          {this.state.quoteText}
        </div>
        <div id="author">
          <p className="ms-auto fs-5">{this.state.author}</p>
        </div>
        <div id="social-row">
          <button
            id="copy-quote"
            type="button"
            className="btn btn-primary me-1"
            onClick={this.copyQuote}
          >
            <i class="fa-solid fa-copy"></i>
          </button>
          <button
            id="tweet-quote"
            type="button"
            className="btn btn-primary me-1"
            onClick={this.sendQuoteTwitter}
          >
            <i className="fa fa-twitter"></i>
          </button>
          <button
            id="tumblr-quote"
            type="button"
            className="btn btn-primary"
            onClick={this.sendQuoteTumblr}
          >
            <i className="fa-brands fa-tumblr"></i>
          </button>
          <button
            id="new-quote"
            type="button"
            className="btn btn-primary ms-auto"
            onClick={this.updateQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quotebox;
