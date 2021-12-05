import React, { Fragment } from 'react';
import * as _missionStatment from '../../../../data/missionStatements.json';

const mission = () => {
  return (
    <Fragment>
      <div>Mission Statement</div>
      <div>{_missionStatment.full}</div>
    </Fragment>);
};

export default mission;
