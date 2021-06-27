function CategoryInputItem(props) {
  return (
    <option value={props.value} id={props.id} key={props.id}>
      {props.value}
    </option>
  );
}

export default CategoryInputItem;
