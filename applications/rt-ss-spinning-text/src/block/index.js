import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { blockStyles as styles } from "./styles";

const useStyles = makeStyles(() => styles);
const Block = () => {
  const classes = useStyles();
  return <div className={classNames(classes.blockContainer)}></div>;
};

export { Block };
