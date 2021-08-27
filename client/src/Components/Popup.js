import { Button, Dialog, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    height: '300px',
    width: '800px',
  },
}))


const Popup = (props) => {

  const classes = useStyles();
  const { title, openPopup, setOpenPopup } = props;

  const history = useHistory();

  const handleClose = () => {
    setOpenPopup(false)
    if(props?.path)
      history.push(props?.path)
  }

  return (
    <div>
      <Dialog 
        open={openPopup} 
        onClose={handleClose} 
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>
          <paper style={{display: 'flex'}}>
            {props.render}
            <Button onClick={handleClose} style={{ width: '15px', height: '30px', marginRight: '-15px', padding: '0'}}>{<CloseIcon />}</Button>
          </paper>
          <Typography variant="h3" style={{textAlign: "center", marginTop: '70px'}}>{title}</Typography>
        </DialogTitle>
      </Dialog>
    </div>
  )
}

export default Popup
