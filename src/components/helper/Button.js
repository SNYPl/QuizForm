import React from "react";
import styles from './startButton.module.css'

const Button = (props) => {
  return (
    <div className={styles.buttonContainer}>
      <button type="submit" 
              value="Submit" 
              className={props.style} 
              onClick={props.onClick}>

             {props.children}
      </button>
    </div>
  );
};

export default Button;
