import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useStateValue } from "../../StateProvider";
import './Navbar.css';
import { auth } from "../../firebase";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '70ch',
      '&:focus': {
        width: '75ch',
      },
    },
  },
}));


export default function Navbar(props) {
  const [{ user }, dispatch] = useStateValue();
  const logOut = () => {
  auth.signOut()
  .then(function() {
    // Sign-out successful.
    dispatch({
      type: "SET_USER",
      user:null
    })
  })
  .catch(function(error) {
    // An error happened
    console.log(error)
  });
   
  }

  const { setSignup, setLogin, isLogin, isSignup, classes } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
      color="default"
      elevation={0}
      >
        <Toolbar>
          
          <Typography
            variant="h4"
            noWrap
            component="div"
            edge="start"
            color="inherit"
            sx={{ mr: 4 }}
          >
            Cartiofy
          </Typography>
          <Search sx={{ mr: 4 }} style={{border:"1px solid black"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {user ?
            <Button color="inherit" onClick={logOut}>LOG OUT</Button>
            :
            
          <>
          <Button color="inherit" onClick={setSignup}>SIGN UP</Button>
          <Button color="inherit" onClick={setLogin}>LOGIN</Button>
          </>
          }
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
