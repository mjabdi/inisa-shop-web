import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/home/app-bar'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>InisaShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar/>

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
