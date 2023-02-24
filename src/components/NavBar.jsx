import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import './index.css'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PublishIcon from '@mui/icons-material/Publish';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ErrorIcon from '@mui/icons-material/Error';
import ContactsIcon from '@mui/icons-material/Contacts';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
const pages = [
  {name: '首页', path: '/'},
  {name: '发布项目', path: '/publish-project'},
  {name: '查看项目', path: '/view-project'},
  {name: '联系我们', path: '/contact-us'},
  {name: '模型库', path: '/models'}];

function getIcon(index){
  switch (index) {
    case 0:
      return(<HomeIcon/>);
    case 1:
      return(<PublishIcon/>);
    case 2:
      return (<VisibilityIcon/>);
    case 3:
      return (<ContactsIcon/>);
    case 4:
      return (<AllInclusiveOutlinedIcon/>);
    default:
      return <ErrorIcon/>;
  }
}


/**
 * 导航栏组件
 * @returns {JSX.Element}
 * @constructor
 */
const ResponsiveAppBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
      <Box
          sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem button key="home">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{flexGrow: 1, display: 'flex'}}
            >
              <img src={"img/logo.png"} alt="" style={{margin:'0 auto'}}/>
            </Typography>
          </ListItem>
          {pages.map((page, index) => (
              <ListItem button key={page.name}>
                <Link to={page.path}>
                  <Box sx={{flexGrow: 1, display: 'flex'}}>
                    <ListItemIcon>
                      {getIcon(index)}
                    </ListItemIcon>
                    <ListItemText primary={page.name}/>
                  </Box>
                </Link>
              </ListItem>
          ))}
        </List>
      </Box>
  );

  return (
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
              >
                <img src={"img/logo.png"} alt=""/>
              </Typography>
              <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer('left', true)}
                    color="inherit"
                >
                  <MenuIcon/>
                </IconButton>
                <SwipeableDrawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                  {list('left')}
                </SwipeableDrawer>
              </Box>


              {/*下面是移动端展示效果*/}
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
              >
                <img src={"img/logo.png"} alt=""/>
              </Typography>
              {/*下面是PC端显示*/}
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        sx={{my: 2, color: 'white', display: 'block'}}
                    >
                      <Link to={page.path}>
                        {page.name}
                      </Link>
                    </Button>
                ))}
              </Box>
              <Box sx={{flexGrow: 0}}>
                <Button sx={{my: 2, color: 'white', display: 'block'}}>
                  注册
                </Button>
              </Box>
              <Box sx={{flexGrow: 0}}>
                <Button sx={{my: 2, color: 'black', display: 'block'}}>
                  <Link to={"/login"}>
                    登录
                  </Link>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {/*<Login/>*/}
      </div>
  );
};
export default ResponsiveAppBar;
