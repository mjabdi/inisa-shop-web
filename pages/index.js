import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/home/app-bar'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import React from 'react'

const Home = ({t}) => {

  React.useEffect(() => {
    i18n.changeLanguage('fa');
  },[]);

  return (

    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar t={t}/>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
           inisashop.com
        </a>
      </footer>
    </div>
  )
}


Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
