import React from "react";
import styles from "./Header.module.css";
import Nav from "../../molecules/Nav/Nav";

export default function Header(props) {
  return (
    <div className={styles.Header}>
      <h1>Tittle: </h1>
      <Nav {...props} />
    </div>
  );
}
