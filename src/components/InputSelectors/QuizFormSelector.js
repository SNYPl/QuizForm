import Form from '../helper/Form'
import CategorySelector from "./CategorySelector";
import DifficultSelector from "./DifficultSelector";
import StartButton from "../helper/Button";
import styles from './quizFormSelector.module.css';

const QuizFormSelector = (props) => {

    return (

        <Form submit={props.SubmitForm} style={styles.quizForm}> 
            <CategorySelector onChangeCategory={props.categoryInput} />  
            <DifficultSelector onChangeDifficult={props.difficultInput}/>
            <StartButton style={styles.quizButton}>Submit</StartButton>
         </Form>

    )

}

export default QuizFormSelector;