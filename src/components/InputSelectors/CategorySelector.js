import React from "react";
import CategoryInputItem from "./categorySelectorItem/CategoryinputItem";
import styles from './menuInputs.module.css';

const CategorySelector = (props) => {
  const quizCategory = [
    {
      id: "any",
      value: "Any Category",
    },

    {
      id: 9,
      value: "General Knowledge",
    },
    {
      id: 10,
      value: "Entertainment: Books",
    },
    {
      id: 11,
      value: "Entertainment: Film",
    },
    {
      id: 12,
      value: "Entertainment: Music",
    },
    {
      id: 13,
      value: "Entertainment: Musicals & Theatres",
    },
    {
      id: 14,
      value: "Entertainment: Television",
    },
    {
      id: 15,
      value: "Entertainment: Video Games",
    },
    {
      id: 16,
      value: "Entertainment: Board Games",
    },
    {
      id: 17,
      value: "Science & Nature",
    },
    {
      id: 18,
      value: "Science : Computers",
    },
    {
      id: 19,
      value: "Science : Mathematics",
    },
    {
      id: 20,
      value: "Mythology",
    },
    {
      id: 21,
      value: "Sports",
    },
    {
      id: 22,
      value: "Geography",
    },
    {
      id: 23,
      value: "History",
    },
    {
      id: 24,
      value: "Politics",
    },
    {
      id: 25,
      value: "Art",
    },
    {
      id: 26,
      value: "Celebrities",
    },
    {
      id: 27,
      value: "Animals",
    },
    {
      id: 28,
      value: "vehicles",
    },
    {
      id: 29,
      value: "Entertainment: Comics",
    },
    {
      id: 30,
      value: "Science : Gadgets",
    },
    {
      id: 31,
      value: "Entertainment: Japanese Anime & Manga",
    },
    {
      id: 32,
      value: "Entertainment: Cartoon & Animations",
    },
  ];

  const categoryListener = (event) => {
    let itemId = quizCategory
      .map((item) => {
        if (event.target.value === item.value) {
          return item.id;
        }
      })
      .filter((e) => e);

    props.onChangeCategory(itemId[0]);
  };

  return (
    <div className={styles.menuInputContainer}>
      <label htmlFor="category" className={styles.inputLabel}>Select Category:</label>

      <select name="category" 
      id="category" 
      onChange={categoryListener}
      className={styles.inputSelector}>
        {quizCategory.map((item) => (
          <CategoryInputItem value={item.value} id={item.id} key={item.id} />
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
