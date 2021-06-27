import styles from "./questionFormItems.module.css";

const QuestionFormItems = (props) => {
  const incorrentAnswer = props.questions.incorrect_answers.map((item) => {
    return item;
  });
  const correctAnswers = [props.questions.correct_answer];

  const allQuestion = [...incorrentAnswer, ...correctAnswers];

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div
      className={styles.questionContainer}
      onChange={(e) => props.click(e, props.id)}
    >
      <p className={styles.questionParagraph}>
        {decodeHtml(props.questions.question)}
      </p>

      {allQuestion.map((item) => {
        let id = Math.random();
        return (
          <div className={styles.inputContainer}>
            <input
              type="radio"
              id={id}
              value={item}
              name={props.id}
              key={props.id}
            />
            <label htmlFor={id} className={styles.questionInputLabel}>
              {decodeHtml(item)}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionFormItems;
