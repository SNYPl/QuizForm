import React, { useState, Fragment } from "react";
import axios from "axios";

import QuestionForm from "./questionsForm/QuestionsForm";
import QuizFormSelector from "./InputSelectors/QuizFormSelector";

const CreateForm = () => {
  const [Difficult, setDifficult] = useState("Easy");
  const [category, setCategory] = useState("Any Category");
  const [quizQuestions, setQuizQuestions] = useState("");
  const [formSubmited, setFormSubmited] = useState(false);

  const difficultInput = (SelectedDifficult) => {
    setDifficult(SelectedDifficult);
  };

  const categoryInput = (SelectedCategory) => {
    setCategory(SelectedCategory);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    let whichCategory =
      category !== "Any Category"
        ? `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${Difficult.toLowerCase()}`
        : `https://opentdb.com/api.php?amount=10`;

    axios.get(whichCategory).then((response) => {
      if (response.status !== 200) {
        return;
      }

      setQuizQuestions(response);
      setFormSubmited(true);
    });
  };

  return (
    <Fragment>
      {formSubmited ? (
        <QuestionForm
          question={quizQuestions}
          resetQuizForm={setFormSubmited}
        />
      ) : (<QuizFormSelector
          SubmitForm={onSubmitForm}
          categoryInput={categoryInput}
          difficultInput={difficultInput}
        />
      )}
    </Fragment>
  );
};

export default CreateForm;
