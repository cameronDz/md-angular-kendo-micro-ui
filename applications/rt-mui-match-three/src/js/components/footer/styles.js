const greyBackground = '#f5f5f5';
const greyBorder = '#dbdbdb';

const simpleDialogStyles = {
  dialogContainer: {
    width: '580px'
  },
  dialogSection: {},
  dialogHeader: {
    backgroundColor: greyBackground,
    borderBottom: `1px solid ${greyBorder}`
  },
  dialogBody: {
    paddingBottom: '12px'
  },
  dialogFooter: {
    backgroundColor: greyBackground,
    borderTop: `1px solid ${greyBorder}`,
    minHeight: '40px'
  }
};

const footerStyles = {
  footerContainer: {
    alignItems: 'center',
    bottom: '0',
    display: 'flex',
    height: '36px',
    marginTop: '-44px',
    maxWidth: '100%',
    padding: '4px 0',
    textAlign: 'center',
    width: '100%'
  },
  footerVerbiage: {
    margin: 'auto',
    maxWidth: '1280px'
  },
  appTitle: {
    fontWeight: '700'
  }
};

export { footerStyles, simpleDialogStyles };
