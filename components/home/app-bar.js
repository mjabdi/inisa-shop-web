import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './app-bar.module.css';
import { i18n, Link, withTranslation } from '../../i18n'
import PropTypes from 'prop-types'

export default function MyAppBar ({ t }) 
{
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
               {t('title')}
            </Typography>
            <Button
              style={{color:"#fff"}}
              type="button"
            >

              {t('login')}
            </Button>
          </Toolbar>
        </AppBar>
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