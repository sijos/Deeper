const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    width                 : '36vw',
    height                : '46vh',
    overflow              : 'hidden',
    display               : 'flex',
    alignItems            : 'center',
    justifyContent        : 'center',
    maxWidth              : '400px',
    maxHeight             : '410px',
    minHeight             : '330px',
  }
};

export default ModalStyle;
