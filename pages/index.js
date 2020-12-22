import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/home/app-bar'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import React from 'react'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const Home = ({t}) => {

  React.useEffect(() => {
    i18n.changeLanguage('fa');
  },[]);

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
<>
    <Head>
      <title>{t('title')}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

 


    

      <main className={styles.main}>

     

        <section id= "section1" className={styles.section1}>

        <AppBar t={t}/>

        {/* <div className={styles.box1} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div style={{ transform: props.xy.interpolate(trans1) }} >
          <Image
              src="/images.png"
              width={250}
              height={200}
            />
            </animated.div>
            </div> */}

        </section>
        <section id = "section2" className={styles.section2}>

        </section>
        {/* <section id= "section3" className={styles.section3}>

        </section>         */}
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
 

    </>
  )
}


Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
