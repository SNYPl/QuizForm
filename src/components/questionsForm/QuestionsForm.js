import { useState, Fragment } from "react";
import QuestionFormItems from "./QuestionFormItems/QuestionFormItems";
import Button from "../helper/Button";
import Form from "../helper/Form";
import styles from "./questionForm.module.css";
import Result from "../quizResult/TestResult";

const QuestionForm = ({ question, resetQuizForm }) => {
  const [value, setValue] = useState(
    new Array(question.data.results.length).fill(null)
  );
  const [choosedCorrectAnswer, setChoosedCorrectAnswer] = useState([]);
  const [quizIsFinished, setQuizIsFinished] = useState(false);
  const [inputRadioValidated, setInputIsNotValidated] = useState(false);

  let correctAnswers = question.data.results.map((e) => e.correct_answer);

  const onChangeHandler = (e, id) => {
    value[id] = e.target.value;

    setValue(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let choosedQuestion = value.filter(
      (item, id) => item === correctAnswers[id]
    );
    setChoosedCorrectAnswer(choosedQuestion);

    let otherThanNull = value.some(function (el) {
      return el === null;
    });

    if (otherThanNull) {
      setInputIsNotValidated(true);
      return;
    }

    setQuizIsFinished(true);
  };

  const QuestionForm = (
    <Fragment>
      {
        <Form submit={onSubmitHandler}>
          {question.data.results.map((items, id) => {
            return (
              <QuestionFormItems
                key={id}
                questions={items}
                id={id}
                click={onChangeHandler}
              />
            );
          })}
          {inputRadioValidated && (
            <p className={styles.validatorErrorMessage}>Select All Input</p>
          )}
          <Button style={styles.questionFormButton}>Finish</Button>
        </Form>
      }
    </Fragment>
  );

  const repeatButtonHandler = () => {
    resetQuizForm(false);
    setQuizIsFinished(false);
    setChoosedCorrectAnswer([]);
    setValue(new Array(question.data.results.length).fill(null));
  };
  return (
    <Fragment>
      {!quizIsFinished && QuestionForm}
      {quizIsFinished && (
        <Result
          result={choosedCorrectAnswer.length}
          repeatButtonHandler={repeatButtonHandler}
        />
      )}
    </Fragment>
  );
};
export default QuestionForm;
