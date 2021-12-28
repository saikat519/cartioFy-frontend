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
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Link } from 'react-router-dom';

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
    [theme.breakpoints.up('xs')]: {
      width: '10ch',
      '&:focus': {
        width: '12ch',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '55ch',
      },
    },
  },
}));


export default function Navbar(props) {
  const [{ user,cart }, dispatch] = useStateValue();
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

  const { setSignup, setLogin } = props;
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
      color="default"
      elevation={0}
      >
        <Toolbar>
          <Link to='/' style={{ color: 'black' }}>
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
          </Link>
          <Search sx={{ mr: 15 }} style={{border:"1px solid black"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {user ?
            <Button color="inherit" onClick={logOut} sx={{mr:4}}>LOG OUT</Button>
            :
            
          <>
          <Button color="inherit" onClick={setSignup}>SIGN UP</Button>
          <Button color="inherit" onClick={setLogin} sx={{mr:4}}>LOGIN</Button>
          </>
          }
          <Link to='/cart'>
            <div className="header__optionBasket">
            <span className="header__optionBasket__icon">
            <AddShoppingCartSharpIcon  style={{ fontSize: 29 }}/>
            </span>
            <span className="header__basketCount">
              {cart?.length}
            </span>
            </div>
          </Link>
          
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
