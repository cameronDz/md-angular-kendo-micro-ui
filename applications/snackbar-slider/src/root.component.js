import React, { useState, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { SnackbarChild } from "./snackbar/child";
import { SnackbarWrapper } from "./snackbar/wrapper";

export default function Root({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <section>{name} is mounted!</section>
      <div>
        <Button color="primary" onClick={handleClick}>
          {isOpen ? "Close Snacks" : "Open Snacks"}
        </Button>
      </div>
      <SnackbarWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <SnackbarChild></SnackbarChild>
      </SnackbarWrapper>
    </Fragment>
  );
}
