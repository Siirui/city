import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from "@mui/material/TextField";

export default function Register() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{textAlign:'center'}}>
          注册
        </DialogTitle>
        <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="账号"
              type="email"
              fullWidth
              variant="standard"
          />
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="密码"
              type="password"
              fullWidth
              variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            取消
          </Button>
          <Button onClick={handleClose} autoFocus>
            确认
          </Button>
        </DialogActions>
      </Dialog>
  );
}
