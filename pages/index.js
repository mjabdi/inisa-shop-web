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

        <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={12}>
        <section id="section1" className={styles.section1}>
          <div style={{  width: "100vw" , padding:"50px"}}>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={6}>
              <div style={{ minHeight: "500px", position: "relative" }}>
                  <div style={{ fontSize: "24px", position: "absolute", top: "15%", right: "0px" }}>
                    <div style={{ fontSize: "50px", fontWeight: "bolder" }}>
                      <span>
                        {t('inisa')}
                      </span>
                      <span>
                        {t('shop')}
                      </span>
                    </div>
                    <div className={styles.slang}>{t('slang')}</div>
                    <div style={{ marginTop: "15px" }} className={styles.description}>{t('description')}</div>
                  </div>
                </div>

              </Grid>

              <Grid item xs={12} md={6} >
                <div className={styles.firstsec}>
                 <Image
                          src="/images/feets.jpg"
                          width={500}
                          height={300}
                        />
                        </div>
                  {/* <div  onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    {props.xy && (
                   
                      <animated.div style={{ transform: props.xy.interpolate(trans1) }} >
                        <Image
                          src="/images/feets.jpg"
                          width={500}
                          height={300}
                        />
                      </animated.div>
                    )}

                  </div> */}
                
              </Grid>

              {/* <Grid item xs={12} md={4} >

                <div style={{ minHeight: "500px", position: "relative" }}>
                  <div className={styles.box1} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    {props.xy && (
                      <animated.div style={{ transform: props.xy.interpolate(trans1) }} >
                        <Image
                          src="/images/2girls.jpg"
                          width={220}
                          height={290}
                        />
                      </animated.div>
                    )}

                  </div>
                </div>
                </Grid> */}
            </Grid>
          </div>
        </section>

</Grid>
<Grid item xs={12} md={12}>
        <section id="section2" className={styles.section2}>
          <div>
          <div style={{width:"98vw", marginTop:"30px"}}>
            <Grid container direction="row" spacing={2}>
                {facilityCards.map(element => (
                  <Grid key={element.name} item xs={6} md={3}>
                    <FacilityCard title={element.name} description={element.desc} />
                  </Grid>
                ))}
            </Grid>
          </div>

          <div  id="wcbg" className={styles.wcbg} style={{backgroundPositionX : bgX,  color:"pink"}}>
            <span>
              <font style={{fontSize:"200px"}}>0</font>
              <sup>فروشگاه</sup>
            </span>
          </div>
          <div className={styles.content}>
            فروشگاهی برای خرید و فروش های اینستاگرام
          </div>
          <div className={styles.content1}>
            فروشندگان محترم می توانند با استفاده از پنل فروشنده و وارد کردن نام صفحه خود در اینستاگرام می توانند به راحتی محصولات خود را برای فروش ارائه نمایند، و خریداران محترم می توانند با استفاده از پنل خریدار و ثبت نام در سایت از صفحه مورد نظر خود در اینستاگرام به راحتی خرید خود را انجام دهند.
          </div>
          </div>
        </section>

        </Grid>
<Grid item xs={12} md={12}>
        
        <section id= "section3" className={styles.section3}>
        <div style={{width:"98vw", marginTop:"30px"}}>
            <Grid container direction="row" spacing={2}>
                {sectionCards.map(element => (
                  <Grid key={element.name} item xs={12} md={4}>
                    <SectionCard title={element.name} description={element.desc} image={element.img} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </section>    
        </Grid>
<Grid item xs={12} md={12}>
        <section id= "section4" className={styles.section4}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={6}>
            <div className={styles.texttitle} style={{fontSize:"36px" }}>
            فروش آنلاین اینستاگرام
          </div>
            <div className={styles.textdesc} style={{fontSize:"18px" }}>
            این سایت فروش را برای فروشگاه های اینستاگرام  به صورت آنلاین امکان پذیر نموده است
          </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.leftImages} >
                  <Image
                          src="/images/onlineshop.jpg"
                          width={300}
                          height={300}
                        />

              </div>
            </Grid>            
          </Grid>
        </section> 
        </Grid>
<Grid item xs={12} md={12}>
        <section id= "section5" className={styles.section5}>
          <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={6}>
              <div className={styles.rightImages} >
                  <Image
                          src="/images/onlineshop2.png"
                          width={300}
                          height={300}
                        />

              </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={styles.texttitleright} style={{fontSize:"36px" }}>
            خرید آنلاین از اینستاگرام
          </div>
            <div className={styles.textdescright} style={{fontSize:"18px" }}>
            خرید از فروشگاه های اینترنتی را بصورت آنلاین و فقط با چند کلیک در این سایت انجام دهید
          </div>
            </Grid>           
          </Grid>
        </section>
        </Grid>
<Grid item xs={12} md={12}>
        <section id= "section6" className={styles.section4}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={6}>
            <div className={styles.texttitle} style={{fontSize:"36px" }}>
            جستجو بر اساس محصول یا فروشنده
          </div>
            <div className={styles.textdesc} style={{fontSize:"18px" }}>
             خریداران محترم به راحتی می توانند محصول مورد نظر را با مشخصات دلخواه جستجو نمایند و علاوه بر آن امکان جستجوی محصول بر اساس فروشنده مورد نظر و همچنین تمامی هشتگ های اینستاگرام  نیز فراهم می باشد.
          </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.leftImages} >
                  <Image
                          src="/images/onlineshop1.jpg"
                          width={300}
                          height={300}
                        />

              </div>
            </Grid>            
          </Grid>
        </section>
        </Grid>
<Grid item xs={12} md={12}>
        <section id= "section7" className={styles.section5}>
          <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={6}>
              <div className={styles.rightImages} >
                  <Image
                          src="/images/moreview.png"
                          width={300}
                          height={300}
                        />

              </div>
            </Grid>
            <Grid item xs={12} md={6}>
            <div className={styles.texttitleright} style={{fontSize:"36px" }}>
            افزایش بازدید و رشد فروش
          </div>
            <div className={styles.textdescright} style={{fontSize:"18px" }}>
            با اتصال فروشگاه اینستاگرامی خود به این سایت نرخ بازدید در جستجوهای آنلاین برای محصولات خود را افزایش داده و در نتیجه شاهد فروش بیشتری باشید
          </div>
            </Grid>           
          </Grid>
        </section>
        </Grid>
<Grid item xs={12} md={12}>
        <section id= "section8" className={styles.section4}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={6}>
            <div className={styles.texttitleseo} style={{fontSize:"36px" }}>
            سئو
          </div>
            <div className={styles.textdescseo} style={{fontSize:"18px" }}>
          این سایت با پیاده سازی فرآیندهای سئو اهداف زیر را پوشش داده و با به روز رسانی بهترین الگوها و الگوریتم های سئو، همواره در جهت پیشبرد هر چه بیشتر این اهداف کوشا می باشد:
          <div>افزایش بازدید سایت
          </div><div>
          ایجاد برند و شناخت آن به کاربران جدید
          </div><div>
          افزایش ترافیک سایت
          </div><div>
          افزایش تعامل کاربران با سایت
          </div><div>
          افزایش فروش محصولات
          </div><div>
          رتبه برتر در موتورهای جستجو 
          </div>
          </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.leftImages} >
                  <Image
                          src="/images/seo.png"
                          width={300}
                          height={300}
                        />

              </div>
            </Grid>            
          </Grid>
        </section>
        </Grid>
</Grid>
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
