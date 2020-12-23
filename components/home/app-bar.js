import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './app-bar.module.css';
import { i18n, Link, withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import { useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

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
                color : 'transparent'
              })

            ) :
            (
              <Slide direction="down" timeout={1000} in={true} mountOnEnter unmountOnExit>
              {
                React.cloneElement(children, {
                  // elevation: 4,
                  style: {opacity: 0.8, backgroundColor: "#fefefe", border: 0, boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.1)"}
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

export default function MyAppBar ({t, ...props}) 
{
    return (

      <div className={styles.root}>
        <ChangeOnScroll {...props}>
        <AppBar>
          <Toolbar>

            <div className={styles.title}>
              <span>  {t('inisa')} </span>
              <span className={styles.yellow}>  {t('shop')} </span>
              
            </div>
            <Button
              style={{color:"#333"}}
              type="button"
            >

              {t('login')}
            </Button>
          </Toolbar>
        </AppBar>
        </ChangeOnScroll>
      </div>
    );
}

// MyAppBar.getInitialProps = async () => ({
//   namespacesRequired: ['common'],
// })

// MyAppBar.propTypes = {
//   t: PropTypes.func.isRequired,
// }

// export default withTranslation('common')(MyAppBar)