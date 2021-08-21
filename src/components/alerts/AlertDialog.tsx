import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeDialog, DialogState } from '../../store/reducers/dialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function AlertDialog() {
  const dispatch = useDispatch<AppDispatch>()
  const { open, title, message, callback } = useSelector<RootState, DialogState>(
    (state) => state.dialog
  )

  const handleClose = () => {
    dispatch(closeDialog())
  }

  const handleAgree = async () => {
    await callback()
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          아니오
        </Button>
        <Button onClick={handleAgree} color="primary" autoFocus>
          예
        </Button>
      </DialogActions>
    </Dialog>
  )
}
