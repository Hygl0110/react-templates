import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={styles.Button}
      type={props.type}
      onClick={props.onClick}
      id={props.id}
    >
      {props.text}
    </button>
  );
}
