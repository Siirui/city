import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SelectVariants from "./SelectVariants";

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.68),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.86),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
      width: 'auto',
    },
  },
}));

export default function SearchAppBar(props) {
  return (
      <AppBar position="static" sx={{height:'60px',borderRadius:'15px'}}>
        {/*<AppBar position="static" sx={{height:'60px',borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}}>*/}
        <Toolbar>
          <SelectVariants {...props}/>
          <Search sx={{borderRadius:'20px'}}>
            <StyledInputBase placeholder="Search…"
                             inputProps={{'aria-label': 'search'}}/>
          </Search>
          <IconButton sx={{marginLeft:'25px'}}>
            <SearchIcon sx={{color: 'white'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
