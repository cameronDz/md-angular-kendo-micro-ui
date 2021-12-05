import React from "react";
import { Slide, Snackbar } from "@material-ui/core";

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

const SnackbarWrapper = ({ children, isOpen, setIsOpen }) => {
  const handleClose = (_event, reason) => {
    if (reason === "timeout") {
      setIsOpen(false);
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={6000}
      onClose={handleClose}
      open={isOpen}
      TransitionComponent={SlideTransition}
    >
      <div>{children}</div>
    </Snackbar>
  );
};

export default SnackbarWrapper;
