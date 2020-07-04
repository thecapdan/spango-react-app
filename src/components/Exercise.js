import React from "react";
import ExerciseQuestion from "./ExerciseQuestion";
import ExerciseProgress from "./ExerciseProgress";

class Exercise extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      answered: false,
      buttonLabel: "Check",
      userInput: "",
      incorrect: [],
    };
    this.proceed = this.proceed.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.addSpecialCharacter = this.addSpecialCharacter.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.storeResult = this.storeResult.bind(this);
    this.proceedButton = React.createRef();
    this.textInput = React.createRef();
  }

  proceed() {
    if (this.state.answered) {
      this.nextQuestion();
      this.proceedButton.current.blur();
    } else {
      this.checkAnswer();
      this.proceedButton.current.focus();
    }
  }

  onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.proceed();
    } else if (e.keyCode === 78 && e.ctrlKey) {
      e.preventDefault();
      this.addSpecialCharacter("ñ");
    }
  }

  nextQuestion() {
    this.setState((previousState) => {
      const numberOfExercises = this.props.exercises.length;
      return {
        index:
          previousState.index >= numberOfExercises - 1
            ? 0
            : previousState.index + 1,
        answered: false,
        buttonLabel: "Check",
        userInput: "",
      };
    });
  }

  setUserAnswer(input) {
    this.setState({
      userInput: input.target.value,
    });
  }

  checkAnswer() {
    this.setState({
      answered: true,
      buttonLabel: "Next",
    });
  }

  storeResult(isCorrect) {
    // this.setState({
    //   incorrect: [],
    // });
  }

  addSpecialCharacter(keyEvent) {
    const char =
      typeof keyEvent == "string" ? keyEvent : keyEvent.currentTarget.value;
    this.setState((previousState) => {
      return {
        userInput: previousState.userInput + char,
      };
    });
  }

  componentDidUpdate() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="Exercise">
        <h2>Exercise</h2>
        <ExerciseQuestion
          pair={this.props.exercises[this.state.index]}
          validate={this.state.answered}
          input={this.state.userInput}
          mode={this.props.mode}
          onAnswered={this.storeResult}
        />
        <textarea
          ref={this.textInput}
          id="inputBox"
          label="Answer"
          multiline
          rows={2}
          defaultValue=""
          variant="outlined"
          spellcheck="false"
          disabled={this.state.answered}
          onKeyDown={this.onEnterPress}
          value={this.state.userInput}
          onChange={this.setUserAnswer}
        />
        <br />

        {/*/ move to component */}
        <button
          className="key__button"
          onClick={this.addSpecialCharacter}
          value="ñ"
        >
          ñ
        </button>
        <button
          className="key__button"
          onClick={this.addSpecialCharacter}
          value="é"
        >
          é
        </button>
        <button
          className="key__button"
          onClick={this.addSpecialCharacter}
          value="í"
        >
          í
        </button>
        <button
          className="key__button"
          onClick={this.addSpecialCharacter}
          value="ó"
        >
          ó
        </button>

        <button
          className="key__button proceedButton"
          onClick={this.proceed}
          ref={this.proceedButton}
          onKeyDown={this.onEnterPress}
        >
          {this.state.buttonLabel}
        </button>
        <ExerciseProgress
          current={this.state.index}
          flagged={this.state.incorrect}
          total={this.props.exercises.length}
        />
      </div>
    );
  }
}

export default Exercise;
