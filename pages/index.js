import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InisaShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>





      <div style={{margin:"20px"}}>
        <h1 className={styles.title}>
          به اینیسا شاپ خوش آمدید
        </h1>

      </div>


        <h1 className={styles.title}>
          Welcome to <a href="#">Inisa Shop</a>
        </h1>

        <p className={styles.description}>
          Website will be launched soon ...      
        </p>

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
