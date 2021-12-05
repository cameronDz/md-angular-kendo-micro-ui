import { generateRandomNumber } from '../../lib';

const create2dArray = () => {
  const arr = [];
  for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
    arr.push([]);
  }
  return arr;
};

const generateBoard = () => {
  const board = [];
  for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
    const row = [];
    for (let colIdx = 0; colIdx < 5; colIdx++) {
      row.push(generateRandomNumber());
    }
    board.push(row);
  }
  return board;
};

const numberLeftMatches = (board, rowIdx, colIdx) => {
  let matching = 1;
  let isMatching = true;
  while (isMatching) {
    if ((!!board?.[rowIdx]?.[colIdx] || board?.[rowIdx]?.[colIdx] === 0) && board[rowIdx][colIdx] === board[rowIdx][colIdx + matching]) {
      matching++;
    } else {
      isMatching = false;
    }
  }
  return matching > 2 ? matching : 0;
};

const numberDownMatches = (board, rowIdx, colIdx) => {
  let matching = 1;
  let isMatching = true;
  while (isMatching) {
    if ((!!board?.[rowIdx]?.[colIdx] || board?.[rowIdx]?.[colIdx] === 0) && board[rowIdx][colIdx] === board[rowIdx + matching]?.[colIdx]) {
      matching++;
    } else {
      isMatching = false;
    }
  }
  return matching > 2 ? matching : 0;
};

const sumMatchCount = (board) => {
  let cnt = 0;
  for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
    for (let colIdx = 0; colIdx < 5; colIdx++) {
      cnt += board[rowIdx][colIdx] || 0;
    }
  }
  return cnt;
};

export { create2dArray, generateBoard, numberLeftMatches, numberDownMatches, sumMatchCount };
