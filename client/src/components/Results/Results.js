import React, { Component } from "react";
import ReactDOM from "react-dom";
import Result from "./Result";

class Results extends Component {
  state = {};

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);
    node.scrollIntoView();
  }

  render() {
    let results;
    if (this.props.results.length > 0) {
      results = this.props.results.map(article => (
        <Result
          headline={article.headline.main}
          link={article.web_url}
          date={article.pub_date}
          key={article.uri}
        />
      ));
    } else {
      return <h1>Sorry, no results came back for your search! Try again.</h1>;
    }
    return (
      <div>
        <h1>Results</h1>
        <ul className="collection">{results}</ul>
      </div>
    );
  }
}

export default Results;