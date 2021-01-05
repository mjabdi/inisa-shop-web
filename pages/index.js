import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/home/app-bar'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import FacilityCard from '../components/home/facility-card'
import SectionCard from '../components/home/section-card'


const facilityCards = [
  { name: 'فروش', desc: '  امکان فروش محصولات به سادگی در این سایت برای شما فراهم شده است، با ثبت نام در سایت می توانید به تمامی محصولات اینستاگرام خود دسترسی داشته باشید.' },
  { name: 'خرید', desc: 'خریداران محترم میتوانند به راحتی چند کلیک محصول مورد علاقه خود را که به صورت هشتگ های اینستاگرام موجود می باشد، جستجو و پیدا کنند.' },
  { name: 'سبد خرید', desc: 'بدون نیاز به ارسال پیام بین فروشنده و خریدار، با ثبت کالا در سبد خرید از فروشگاه های اینستاگرام خرید کنید' },
  { name: 'خرید آنلاین', desc: 'خرید خود را با پرداخت آنلاین با اطمینان و پشتوانه این سایت انجام دهید.' },

]

const sectionCards = [
  { name: 'فروشنده',img:"/images/sellersec.jpg", desc: 'تمامی محصولات ارائه شده در صفحه اینستاگرام خود را با ثبت نام در بخش فروشندگان قابل ارائه برای فروش آنلاین درآورید' },
  { name: 'خریدار',img:"/images/buyersec.jpg", desc: 'محصولات مورد نظر خود را از صفحه دلخواه خود در اینستاگرام به راحتی با ثبت نام در این سایت به صورت آنلاین خریداری نمایید' },
  { name: 'بلاگ',img:"/images/blogsec.jpg", desc: 'در این بخش مطالبی جذاب و آموزنده در خصوص مد، استایل، ترکیب بندی لباس، دکور، طراحی داخلی، و هر آنچه برای یک زندگی شیرین مورد نیاز است ارائه می گردد.'},
  { name: 'رویدادها',img:"/images/eventsec.jpg", desc: 'رویدادهای مهم سال، جشن ها، سال نو، حراج ها، را به بهترین نحو برگزار می کنیم' },
  { name: 'برندینگ',img:"/images/brandsec.jpg", desc: 'با ما محصولات خود را برند کنید، و یا برند دلخواه خود را ایجاد کنید'},
  { name: 'ارتباط با ما',img:"/images/contactsec.jpg", desc: 'با ما همراه باشید، پیشنهادات و انتقادات شما راهیست به سوی موفقیت ' },
]


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2 - 50]
const trans1 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')



const Home = ({ t }) => {

  React.useEffect(() => {
    i18n.changeLanguage('fa');
    const interval = setInterval(() => {
      setBgX(prevX => prevX - 1);
    }, 10);

    return () =>
    {
      clearInterval(interval);
    }

  }, []);

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const [bgX, setBgX] = React.useState(0);

  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
    to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 }
  })

  const getBgX = () =>
  {

  }


  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <AppBar t={t} />

 
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
