import React from "react";
import Marker from "../utils/Marker";
import Highlighter from "react-highlight-words";

class ExerciseQuestion extends React.Component {
  constructor() {
    super();
    this.marker = new Marker();
    this.validateAnswer = this.validateAnswer.bind(this);
  }

  validateAnswer(input) {
    const answer =
      this.props.mode === "target2base"
        ? this.props.pair.base
        : this.props.pair.target;

    const diffs = Marker.findDifferences(
      input.toLowerCase(),
      answer.toLowerCase()
    );

    const isCorrect = diffs.length === 0;
    this.props.onAnswered(isCorrect);

    //return input.toLowerCase() === answer.toLowerCase() ? "correct" : "incorrect"
    return diffs;
  }

  getPlaceholder(str) {
    let placeholder = "";
    [...str].forEach((letter) => (placeholder += letter === " " ? " " : "_"));
    return placeholder;
  }

  render() {
    // TODO if esp -> eng
    let answerState = null;
    let inputMistakes = [];
    const mode = this.props.mode;

    const phrase =
      mode === "target2base" ? this.props.pair.target : this.props.pair.base;
    const translation =
      mode === "target2base" ? this.props.pair.base : this.props.pair.target;

    const placeholder = this.getPlaceholder(translation);
    const validate = this.props.validate;
    const input = this.props.input;

    if (validate) {
      inputMistakes = this.validateAnswer(input);
      answerState = inputMistakes.length === 0 ? "correct" : "incorrect";
    }

    return (
      <div className="question">
        <div name="question">{phrase}</div>
        {(validate && (
          <Highlighter
            className="correct"
            highlightClassName="incorrect"
            searchWords={inputMistakes}
            autoEscape={true}
            textToHighlight={translation}
          />
        )) || <span>{placeholder}</span>}
      </div>
    );
  }
}

export default ExerciseQuestion;
