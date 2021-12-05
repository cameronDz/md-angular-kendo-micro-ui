import React, { useState, Fragment } from "react";
import { Block } from "./block";
import { Spinner } from "./spinner";

const showBlock = true;
const showSpinner = true;
const Root = () => {
  const [isSpinning, setIsSpinnng] = useState(false);
  return (
    <Fragment>
      {showSpinner && (
        <Fragment>
          <Spinner isSpinning={isSpinning} value={50} />
          <button onClick={() => setIsSpinnng((prev) => !prev)}>
            {isSpinning ? "STOP" : "START"}
          </button>
        </Fragment>
      )}
      {showBlock && <Block />}
    </Fragment>
  );
};

export default Root;
