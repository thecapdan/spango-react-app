import React from "react";

class ExerciseProgress extends React.Component {
  render() {
    var renderedOutput = Array(this.props.total)
      .fill()
      .map((_, i) => (
        <span
          className={`
            progressRectangle 
            ${i <= this.props.current ? " completed" : ""}
            ${this.props.flagged.includes(i) ? " flagged" : ""}
          `}
        ></span>
      ));

    return <div className="Progress">{renderedOutput}</div>;
  }
}

export default ExerciseProgress;
