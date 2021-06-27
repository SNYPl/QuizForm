import React from "react";
import styles from './menuInputs.module.css';
const DifficultSelector = (props) => {
  const difficultListener = (event) => {
    props.onChangeDifficult(event.target.value);
  };

  return (
    <div className={styles.menuInputContainer}>
      <label htmlFor="difficult" className={styles.inputLabel}>Select Difficulty:</label>

      <select 
      name="difficult"
       id="difficult" 
       onChange={difficultListener}
       className={styles.inputSelector}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultSelector;
