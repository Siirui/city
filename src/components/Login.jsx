import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import {AccountCircle, Lock} from "@mui/icons-material";
import {Box} from "@mui/material";

export default function Login() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  // 当设备中等以下尺寸的时候全屏展示modal
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle style={{textAlign:'center'}}>登录</DialogTitle>
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
          <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
            {/*<AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>*/}
            <TextField id="input-with-sx"
                       autoFocus
                       margin="dense"
                       id="name"
                       label="账号"
                       type="email"
                       fullWidth
                       variant="standard"/>
          </Box>
          {/*<Box sx={{display: 'flex', alignItems: 'flex-end'}}>*/}
          {/*  <Lock sx={{color: 'action.active', mr: 1, my: 0.5}}/>*/}
          {/*  <TextField id="input-with-sx" label="密码" variant="standard"/>*/}
          {/*</Box>*/}
        </DialogContent>
        {/*<DialogActions>*/}
        {/*  <Button onClick={handleClose}>Cancel</Button>*/}
        {/*  <Button onClick={handleClose}>Subscribe</Button>*/}
        {/*</DialogActions>*/}
      </Dialog>
      // <Dialog
      //     fullScreen={fullScreen}
      //     open={open}
      //     onClose={handleClose}
      //     aria-labelledby="responsive-dialog-title"
      // >
      //   <DialogTitle id="responsive-dialog-title" sx={{textAlign:'center'}}>
      //     登录
      //   </DialogTitle>
      //   <DialogContent>
      //     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      //       <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      //       <TextField id="input-with-sx" label="账号" variant="standard" />
      //     </Box>
      //     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      //       <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      //       <TextField id="input-with-sx" label="密码" variant="standard" />
      //     </Box>
      //     {/*<Box sx={{flexGrow: 1, display: 'flex'}}>*/}
      //     {/*  <AccountCircleIcon sx={{padding:'20px 5px 0px 20px'}}/>*/}
      //     {/*  /!*<AccountBoxIcon sx={{margin:'0px 5px 0px 5px'}}/>*!/*/}
      //     {/*  <TextField*/}
      //     {/*      autoFocus*/}
      //     {/*      margin="dense"*/}
      //     {/*      id="name"*/}
      //     {/*      label="邮箱"*/}
      //     {/*      type="email"*/}
      //     {/*      fullWidth*/}
      //     {/*      variant="standard"*/}
      //     {/*      sx={{display:'flex'}}*/}
      //     {/*  />*/}
      //     {/*</Box>*/}
      //
      //     {/*<Box sx={{flexGrow: 1, display: 'flex'}}>*/}
      //     {/*  <Lock sx={{padding:'20px 5px 0px 20px', fontSize:'80'}}/>*/}
      //     {/*  <TextField*/}
      //     {/*      autoFocus*/}
      //     {/*      margin="dense"*/}
      //     {/*      id="name"*/}
      //     {/*      label="密码"*/}
      //     {/*      type="password"*/}
      //     {/*      fullWidth*/}
      //     {/*      variant="standard"*/}
      //     {/*      sx={{display:'flex'}}*/}
      //     {/*  />*/}
      //     {/*</Box>*/}
      //
      //   </DialogContent>
      //   <DialogActions>
      //     <Button autoFocus variant="contained" onClick={handleClose} sx={{color:'white'}}>
      //       取消
      //     </Button>
      //     <Button autoFocus variant="outlined" onClick={handleClose} >
      //       登录
      //     </Button>
      //   </DialogActions>
      // </Dialog>
  );
}
