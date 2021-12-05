import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { generateRandomNumber } from '../../lib';
import {
  create2dArray,
  generateBoard,
  numberLeftMatches,
  numberDownMatches,
  sumMatchCount
} from './lib';
import { boardStyles as styles } from './styles';

const color = {
  0: 'blue-brick',
  1: 'red-brick',
  2: 'green-brick',
  3: 'yellow-brick'
};

const shiftBoard = (board = [], matches = []) => {
  const dupMatches = [];
  const shiftedBoard = [];
  for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
    shiftedBoard[rowIdx] = [];
    dupMatches[rowIdx] = [];
    for (let colIdx = 0; colIdx < 5; colIdx++) {
      shiftedBoard[rowIdx][colIdx] = board[rowIdx][colIdx];
      dupMatches[rowIdx][colIdx] = matches[rowIdx][colIdx];
    }
  }
  for (let rowIdx = 4; rowIdx >= 0; rowIdx--) {
    for (let colIdx = 4; colIdx >= 0; colIdx--) {
      if (dupMatches[rowIdx][colIdx]) {
        let value;
        if (rowIdx) {
          value = board[rowIdx - 1][colIdx];
          dupMatches[rowIdx - 1][colIdx] = -1;
        } else {
          value = generateRandomNumber();
        }
        shiftedBoard[rowIdx][colIdx] = value;
      }
    }
  }
  return shiftedBoard;
};

const computeBoardMatches = (board) => {
  const matches = create2dArray();
  for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
    for (let colIdx = 0; colIdx < 5; colIdx++) {
      const colMatching = numberDownMatches(board, rowIdx, colIdx);
      for (let idx = 0; idx < colMatching; idx++) {
        matches[rowIdx + idx][colIdx] = true;
      }
      const rowMatching = numberLeftMatches(board, rowIdx, colIdx);
      for (let idx = 0; idx < rowMatching; idx++) {
        matches[rowIdx][colIdx + idx] = true;
      }
    }
  }
  return matches;
};

const useStyles = makeStyles(() => styles);
const Board = () => {
  const [board, setBoard] = useState(() => generateBoard());
  const [matches, setMatches] = useState(() => computeBoardMatches(board));
  const [timer, setTimer] = useState(0);

  const shiftTimerFunc = () => {
    const timerBoard = shiftBoard(board, matches);
    const timerMatches = computeBoardMatches(timerBoard);
    setBoard(timerBoard);
    setMatches(timerMatches);
    const sum = sumMatchCount(timerMatches);
    return !!sum;
  };

  useEffect(() => {
    let newTimer = null;
    if (sumMatchCount(matches)) {
      newTimer = setInterval(() => {
        const timerRows = shiftTimerFunc();
        if (!timerRows) {
          clearInterval(newTimer);
        }
      }, 1000);
      setTimer(newTimer);
    }
    return () => {
      clearInterval(newTimer);
    };
  }, []);

  const classes = useStyles();
  return (
    <div className={classNames(classes.boardContainer)}>
      {board?.map((row, rowIdx) => {
        return (
          <div key={rowIdx} >
            {row.map((colItem, colIdx) => {
              return (
                <span className={classNames(
                  classes.rowItem,
                  color[colItem],
                  matches?.[rowIdx]?.[colIdx] && 'highlighted-row'
                )} key={colIdx}>
                  {colItem}
                </span>
              );
            })}
          </div>
        );
      })}
      <button onClick={() => clearInterval(timer)}>STOP</button>
    </div>
  );
};

export { Board };
