import react, { Component } from "react";

class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <div className={`btn ${this.props.type === "like" ? "like-btn" : ""}`}
        onClick=     
      >
        {this.state.clicked ? "좋아요" : "싫어요"}
      </div>
    );
  }
}



ReactDOM.render(
  <Button type="like" />
  document.getElementById('root')
)