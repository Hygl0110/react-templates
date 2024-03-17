import React from "react";
import Button from "../../atoms/Button/Button";

export default function Nav(props) {
  return (
    <nav>
      <>
        <Button text={"Home"} onClick={props.onClickHome} />
        <Button text={"Info"} onClick={props.onClickInfo} />
      </>
    </nav>
  );
}
