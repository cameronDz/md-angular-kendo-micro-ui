import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core";
import { getSpinnerStyles as getStyles } from "./styles";

const range = 10;
const spinSpeed = 75;
const timeout = { enter: spinSpeed, exit: spinSpeed };
const useStyles = makeStyles(() => getStyles(spinSpeed));
const Spinner = ({ isSpinning = false, value = 0 }) => {
  const [spinTimer, setSpinTimer] = useState(null);
  const [spinValue, setSpinValue] = useState(value);

  useEffect(() => {
    if (isSpinning) {
      if (!spinTimer) {
        const max = value + range;
        const min = value - range;
        const timer = setInterval(() => {
          const display = Math.round(Math.random() * (max - min) + min);
          setSpinValue(display);
        }, spinSpeed);
        setSpinTimer(timer);
      }
    } else {
      clearInterval(spinTimer);
      setSpinTimer(null);
    }
  }, [isSpinning, spinTimer, value]);

  const classes = useStyles();
  return (
    <div className={classes.counter}>
      <TransitionGroup component="span">
        <CSSTransition classNames="ct-node" key={uuid()} timeout={timeout}>
          <span className="count-wrapper">
            {isSpinning ? spinValue : value}
          </span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export { Spinner };
