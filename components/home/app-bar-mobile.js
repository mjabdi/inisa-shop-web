import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './app-bar-mobile.module.css';
import PropTypes from 'prop-types'
import { useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function ChangeOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
 



  return (

    !trigger ?
      (
        React.cloneElement(children, {
          elevation: 0,
          color: 'transparent'
        })

      ) :
      (
        <Slide direction="down" timeout={1000} in={true} mountOnEnter unmountOnExit>
          {
            React.cloneElement(children, {
              // elevation: 4,
              style: { opacity: 0.95, backgroundColor: "#fefefe", border: 0, boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.1)" }
            })

          }
        </Slide>

      )

  );



}

ChangeOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const options = [
    'None',
    'بلاگ ',
    'راهنما',
    'پکیجینگ',
    'درباره اینیسا',

  ];
  
  const ITEM_HEIGHT = 48;

export default function MyAppBar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (

    <div className={styles.root}>
      <ChangeOnScroll {...props}>
        <AppBar>
          <Toolbar style={{color:"#000" , fontWeight:"500"}}>
            <Grid
              container
              id="appbar"
              direction="row-reverse"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6} id="logo" >
                <Grid
                  container
                  id="logoside"
                  direction="row-reverse"
                  justify="flex-start"
                  alignItems="center"
                  spacing={4}
                >
                  
                  <Grid item id="logoside0" >
                    <div style={{ width: "0px" }}></div>
                  </Grid>

                  <Grid item id="logoside1" >
                    <Grid container justify="center" alignItems="flex-end" direction="row-reverse" spacing={1}>
                      <Grid item>
                          <div className={styles.logoContainer}>
                            <Image src="/images/logo_only.png" width="40px" height="40px" alt="logo"/>
                          </div>
                      </Grid>
                      <Grid item>
                            <span style={{fontSize:"1.5rem", fontWeight:"800"}}> Inisashop </span>
                      </Grid>
                    </Grid>

                   
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={6} id="startbutton" style={{paddingTop:"10%"}}>
                <Grid
                  container
                  id="buttonside"
                  direction="row-reverse"
                  justify="flex-end"
                  alignItems="center"
                  spacing={4}
                >

                  <Grid item id="buttonside4" >
                    <span>ورود</span>
                  </Grid>
                  <Grid item id="buttonside5" >
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                                }}
                            >
                                {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                                ))}
                            </Menu>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>

          </Toolbar>
        </AppBar>
      </ChangeOnScroll>
    </div>
  );
}
