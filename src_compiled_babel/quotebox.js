var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quotebox = function (_React$Component) {
  _inherits(Quotebox, _React$Component);

  function Quotebox(props) {
    _classCallCheck(this, Quotebox);

    var _this = _possibleConstructorReturn(this, (Quotebox.__proto__ || Object.getPrototypeOf(Quotebox)).call(this, props));

    _this.state = {
      quoteText: null,
      author: null
    };

    _this.updateQuote = _this.updateQuote.bind(_this);
    _this.sendQuoteTwitter = _this.sendQuoteTwitter.bind(_this);
    _this.sendQuoteTumblr = _this.sendQuoteTumblr.bind(_this);
    _this.copyQuote = _this.copyQuote.bind(_this);
    return _this;
  }

  _createClass(Quotebox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateQuote();
    }
  }, {
    key: "updateQuote",
    value: function updateQuote() {
      var _this2 = this;

      fetch("https://zenquotes.io/api/quotes").then(function (res) {
        return res.json();
      }).then(function (data) {
        var randomNumber = Math.floor(Math.random() * 48);
        _this2.setState({
          quoteText: data[randomNumber].q,
          author: data[randomNumber].a
        });
      });

      var colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

      var color = Math.floor(Math.random() * colors.length);
      document.documentElement.style.setProperty("--main-color", colors[color]);
    }
  }, {
    key: "sendQuoteTwitter",
    value: function sendQuoteTwitter() {
      window.location.href = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + this.state.quoteText + '" ' + this.state.author);
    }
  }, {
    key: "sendQuoteTumblr",
    value: function sendQuoteTumblr() {
      window.location.href = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + encodeURIComponent(this.state.quoteText) + "&content=" + encodeURIComponent(this.state.author) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    }
  }, {
    key: "copyQuote",
    value: function copyQuote() {
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(this.state.quoteText + " - " + this.state.author);

      /* Alert the copied text */
      alert("Copied the text: " + this.state.quoteText + " - " + this.state.author);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "quote-box" },
        React.createElement(
          "div",
          { id: "text" },
          React.createElement("i", { id: "quote-mark", className: "fa fa-quote-left" }),
          " ",
          this.state.quoteText
        ),
        React.createElement(
          "div",
          { id: "author" },
          React.createElement(
            "p",
            { className: "ms-auto fs-5" },
            this.state.author
          )
        ),
        React.createElement(
          "div",
          { id: "social-row" },
          React.createElement(
            "button",
            {
              id: "copy-quote",
              type: "button",
              className: "btn btn-primary me-1",
              onClick: this.copyQuote
            },
            React.createElement("i", { "class": "fa-solid fa-copy" })
          ),
          React.createElement(
            "button",
            {
              id: "tweet-quote",
              type: "button",
              className: "btn btn-primary me-1",
              onClick: this.sendQuoteTwitter
            },
            React.createElement("i", { className: "fa fa-twitter" })
          ),
          React.createElement(
            "button",
            {
              id: "tumblr-quote",
              type: "button",
              className: "btn btn-primary",
              onClick: this.sendQuoteTumblr
            },
            React.createElement("i", { className: "fa-brands fa-tumblr" })
          ),
          React.createElement(
            "button",
            {
              id: "new-quote",
              type: "button",
              className: "btn btn-primary ms-auto",
              onClick: this.updateQuote
            },
            "New Quote"
          )
        )
      );
    }
  }]);

  return Quotebox;
}(React.Component);

export default Quotebox;