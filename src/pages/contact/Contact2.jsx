import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MyMap from "./Map";
// import OutlineButton from "../../components/OutlineButton";
import {TextField} from "@mui/material";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen =() => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <Button onClick={handleClickOpen}>
          测试
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth
        >
          <DialogTitle id="scroll-dialog-title">联系我们</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
            >
              <MyMap/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleClose}>提交</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}
