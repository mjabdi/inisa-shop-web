import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'

const Custom404 = ({t}) => {
    return <h1 style={{padding:"20px"}}> {t('pageNotFound')} </h1>
  }

  Custom404.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
  Custom404.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('common')(Custom404)