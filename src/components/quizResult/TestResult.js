import styles from "./testResult.module.css";
import Button from "../helper/Button";

const testResult = (props) => {
  return (
    <div className={styles.resultsContainer}>
      <p className={styles.results}>Your Score Is : {props.result}</p>
      <Button style={styles.repeatButton} onClick={props.repeatButtonHandler}>
        Repeat Test
      </Button>
    </div>
  );
};

export default testResult;
