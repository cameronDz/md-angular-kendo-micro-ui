const boardStyles = {
  boardContainer: {
    paddingBottom: '12px',
    paddingTop: '12px',
    width: '100%'
  },
  rowContainer: {
    margin: '0 auto'
  },
  rowItem: {
    paddingLeft: '2px',
    paddingRight: '2px',
    '&.blue-brick': {
      backgroundColor: 'blue'
    },
    '&.green-brick': {
      backgroundColor: 'green'
    },
    '&.red-brick': {
      backgroundColor: 'red'
    },
    '&.yellow-brick': {
      backgroundColor: 'yellow'
    },
    '&.highlighted-row': {
      color: 'white',
      fontWeight: 700
    }
  }
};

export { boardStyles };
