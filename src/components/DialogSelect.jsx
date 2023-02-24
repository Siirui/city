import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {List, ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import DialogContentText from "@mui/material/DialogContentText";
import MyMap from "../pages/contact/Map";
import Typography from "@mui/material/Typography";
import OutlineButton from "./OutlineButton";

const colors = ['red', 'blue', 'black', 'purple']

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
      <div>
        <Button onClick={handleClickOpen}>选择颜色</Button>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"paper"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth
        >
          <DialogTitle id="scroll-dialog-title">选择颜色</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
            >
              <List>
                {colors.map(color => (<ListItem button sx={{color: color}}>
                  <Box sx={{flexGrow: 1, display: 'flex'}}>
                    <ListItemText sx={{color: color}} primary={color}/>
                  </Box>
                </ListItem>))}
              </List>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <OutlineButton onClick={handleClose}>
              确认
            </OutlineButton>
          </DialogActions>
        </Dialog>
      </div>
  );
}
