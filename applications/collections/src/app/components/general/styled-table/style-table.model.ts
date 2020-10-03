export class StyledTableModel {

  public columnOne: string;
  public columnTwo: number;
  public columnThree: boolean;
  public columnFour: string;
  public columnFive: string;

  constructor(
      columnOne: string = '',
      columnTwo: number = 0,
      columnThree: boolean = false,
      columnFour: string = '',
      columnFive: string = '') {
    this.columnOne = columnOne;
    this.columnTwo = columnTwo;
    this.columnThree = columnThree;
    this.columnFour = columnFour;
    this.columnFive = columnFive;
  }
}
