import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = ({ variant, children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={variant}
        >
          <p>{children}</p>
          {children == 'Network Error' ? ' API limit reached?' : ''}
        </Alert>
      </Snackbar>
    </div>
  );
};

Message.defaultProps = {
  variant: 'danger',
};
export default Message;
