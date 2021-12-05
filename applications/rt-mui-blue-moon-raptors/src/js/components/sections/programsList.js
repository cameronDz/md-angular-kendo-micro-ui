import React, { Fragment } from 'react';
import * as _types from '../../../../data/programTypes.json';

const programsList = () => {
  const programTypes = _types.programs;

  const renderProgramList = () => {
    return programTypes.map((item, index) => {
      return (
        <li key={index}>
          {item}
        </li>);
    });
  };

  return (
    <Fragment>
      <div>Program Types:</div>
      <ul>
        {renderProgramList()}
      </ul>
    </Fragment>);
};

export default programsList;
