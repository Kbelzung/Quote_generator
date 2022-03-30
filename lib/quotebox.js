var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quotebox = function (_React$Component) {
  _inherits(Quotebox, _React$Component);

  function Quotebox() {
    _classCallCheck(this, Quotebox);

    return _possibleConstructorReturn(this, (Quotebox.__proto__ || Object.getPrototypeOf(Quotebox)).apply(this, arguments));
  }

  _createClass(Quotebox, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "quote-box" },
        React.createElement("div", { id: "text" }),
        React.createElement(
          "div",
          { id: "author" },
          React.createElement(
            "p",
            { className: "ms-auto fs-5" },
            "- Latin Proverb"
          )
        ),
        React.createElement(
          "div",
          { id: "social-row" },
          React.createElement(
            "button",
            {
              id: "tweet-quote",
              type: "button",
              className: "btn btn-primary me-1"
            },
            React.createElement("i", { className: "fa fa-twitter" })
          ),
          React.createElement(
            "button",
            { id: "twitter-quote", type: "button", className: "btn btn-primary" },
            React.createElement("i", { className: "fa-brands fa-tumblr" })
          ),
          React.createElement(
            "button",
            {
              id: "new-quote",
              type: "button",
              className: "btn btn-primary ms-auto"
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