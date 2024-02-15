import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './navbar.css';
import logo from '../../assets/logo.png';
import { useTheme } from '@mui/material/styles';
import { Drawer, useMediaQuery } from '@mui/material';
import line from '../../assets/line.png';

const pages = ['Home', 'About us', 'Services', 'Blog', 'Contact us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();

  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const matches = useMediaQuery('(max-width:1050px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '& .MuiTypography-root, & .MuiButton-root': {
          textTransform: 'capitalize',
          fontFamily: '"Nunito Sans", sans-serif',
          fontSize: '18px',
        },
      }}
    >
      <Container>
        <img src={line} alt="line" className="line" />
        <Toolbar sx={{ maxWidth: '1165px' }}>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <img src={logo} alt="saasto" name="saasto" className="logo-navbar" />
          </Box>
          {matches ? (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              xs={{ borderSolid: '1px solid black' }}
            >
              <MenuIcon onClick={handleCloseNavMenu} />
            </IconButton>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: '#332C5C',
                    display: 'block',
                    padding: '15px',
                    '&:hover': {
                      color: '#7262D2',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

          {matches ? null : (
            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="text"
                  sx={{
                    color: '#8976FD',
                    paddingRight: '38PX',

                    '&:hover': {
                      color: '#7262D2',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    height: '59px',
                    width: '128px',
                    color: '#8976FD',
                    border: '1px solid #8976FD',
                    borderRadius: '15px',

                    '&:hover': {
                      color: '#7262D2',
                      border: '1px solid #7262D2',
                    },
                  }}
                  variant="outlined"
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            {page}
          </MenuItem>
        ))}
      </Drawer>
    </AppBar>
  );
}
export default Navbar;
