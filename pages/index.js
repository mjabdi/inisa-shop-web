import Head from "next/head";
import styles from "../styles/Home.module.scss";
import AppBar from "../components/home/app-bar";
import { i18n, withTranslation } from "../i18n";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FacilityCard from "../components/home/facility-card";
import SectionCard from "../components/home/section-card";
import clx from "classnames";
import Button from "@material-ui/core/Button";
import {
  FormatColorText,
  FormatUnderlined,
  Rotate90DegreesCcw,
} from "@material-ui/icons";

const Home = ({ t }) => {
  const sloganArray = [
    { title: "فروش آنلاین محصول", bg: styles.hpc_underlined_yellow },
    { title: "اتصال به اینستاگرام", bg: styles.hpc_underlined_magenta },
    { title: "فروش روی وب سایت", bg: styles.hpc_underlined_green },
    { title: "راه اندازی کسب و کار", bg: styles.hpc_underlined_indigo },
  ];

  const hpc_pics_bg = [
    styles.hpc_pics_bg_yellow,
    styles.hpc_pics_bg_magenta,
    styles.hpc_pics_bg_green,
    styles.hpc_pics_bg_indigo,
  ];

  const [sloganArrayIndex, setSloganArrayIndex] = React.useState(0);
  const [sloganIndex, setSloganIndex] = React.useState(0);
  const [hpcAnimationClasses, setHpcAnimationClasses] = React.useState(
    clx(styles.hpc_animate)
  );
  const [hpcAnimationClasses2, setHpcAnimationClasses2] = React.useState(
    clx(styles.hpc_animate)
  );
  const [hpcAnimationClasses3, setHpcAnimationClasses3] = React.useState(
    clx(styles.hpc_animate)
  );

  const [hpc_pics_degree, setHpc_piscs_degree] = React.useState(30);
  const [hpc_pics_x, setHpc_piscs_x] = React.useState(0);
  const [hpc_pics_y, setHpc_piscs_y] = React.useState(0);

  const [hpc_phone_degree, setHpc_phone_degree] = React.useState(30);
  const [hpc_phone_x, setHpc_phone_x] = React.useState(0);
  const [hpc_phone_y, setHpc_phone_y] = React.useState(0);

  const [hpc_tablet_degree, setHpc_tablet_degree] = React.useState(30);
  const [hpc_tablet_x, setHpc_tablet_x] = React.useState(0);
  const [hpc_tablet_y, setHpc_tablet_y] = React.useState(0);

  React.useEffect(() => {
    i18n.changeLanguage("fa");

    const sloganTimer = setInterval(() => {
      setSloganIndex((prev) => {
        if (prev < sloganArray[sloganArrayIndex].title.length * 2.2) {
          return prev + 1;
        } else {
          setSloganArrayIndex((prev) =>
            prev < sloganArray.length - 1 ? prev + 1 : 0
          );
          return 0;
        }
      });
    }, 120);

    setHpcAnimationClasses(
      clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_1)
    );
    setHpcAnimationClasses2(
      clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_2)
    );
    setHpcAnimationClasses3(
      clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_3)
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(sloganTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    const scrollTop = parseInt((window.scrollY / window.innerHeight) * 100);
    let degree = 30 - scrollTop;
    if (degree < 0) degree = 0;
    setHpc_piscs_degree(degree);
    setHpc_piscs_x(scrollTop);
    setHpc_piscs_y(-scrollTop);

    degree = 30 - scrollTop;
    if (degree > 30) degree = 30;

    if (degree < 0) degree = 0;

    setHpc_phone_degree(degree);
    let x = scrollTop / 5;
    let y = scrollTop * 1.5 ;
    if (x > 30) x = 30;
    if (y > 60) y = 60;
    setHpc_phone_x(x);
    setHpc_phone_y(y);

    setHpc_tablet_degree(degree);
    let x2 = scrollTop * 7;
    let y2 = scrollTop * 1.5;

    if (x2 > 400) {
      x2 = 400;
    }
    if (y2 > 50) {
      y2 = 50;
    }

    setHpc_tablet_x(x2);
    setHpc_tablet_y(y2);
  };

  const getCurrentSlogan = () => {
    return sloganArray[getCurrentSloganIndex()];
  };

  const getCurrentSloganIndex = () => {
    return hpc_pics_degree < 25 ? 0 : sloganArrayIndex;
  };

  const getSloganPart = () => {
    return getCurrentSlogan().title.substr(0, sloganIndex);
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar t={t} />

      <div className={styles.container}>
        <Grid
          container
          id="sellerhome"
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12} id="1">
            <div className={styles.grid1}>
              <Grid
                container
                id="sec1"
                direction="row-reverse"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec11" xs={12} md={5}>
                  <div className={styles.sec11}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="stretch"
                    >
                      <div style={{ paddingTop: "25%" }}>
                        <Grid item>
                          <h1 className={hpcAnimationClasses}>
                            <div>همین حالا آغاز کنید</div>
                            <div>
                              <span
                                className={clx(
                                  styles.hpc_underlined,
                                  getCurrentSlogan().bg
                                )}
                              >
                                {getSloganPart()}
                              </span>
                              <span
                                className={clx(
                                  styles.hpc_caret,
                                  styles.hpc_caret_show,
                                  styles.hpc_caret_blink
                                )}
                              ></span>
                            </div>
                          </h1>
                          <p className={hpcAnimationClasses2}>
                            با ما فروش آنلاین را تجربه کنید. با اینیسا، فروشگاه
                            رایگان خود را برای همیشه داشته باشید. یکبار ثبت نام
                            کنید و همیشه استفاده کنید.
                          </p>
                          <div className={hpcAnimationClasses3}>
                            <Button
                              style={{
                                backgroundColor: "#111111",
                                color: "#fff",
                                width: "200px",
                                padding: "10px",
                                marginRight: "250px",
                              }}
                              type="button"
                              variant="contained"
                            >
                              رایگان فروشگاه بساز
                            </Button>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item id="sec12" xs={12} md={6}>
                  <div className={styles.phone_container}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                      spacing={4}
                    >
                      <Grid item>
                        <div
                          className={clx(styles.hpc_phone__cover)}
                          style={{
                            transform: `rotate(${hpc_phone_degree}deg) translateX(${hpc_phone_x}vw) translateY(${hpc_phone_y}vh)`,
                          }}>
                               <div className={clx(styles.hpc_phone__frame)}>
                                   <div className={clx(styles.hpc_phone_slide,styles.hpc_phone_slide_next)}>
                                      <img src="/images/phone-slide2.jpg" width="100%" height="100%" alt="phone-pic"/>
                                   </div> 
                                  <div className={clx(styles.hpc_phone_slide,styles.hpc_phone_slide_current)}>
                                      <img src="/images/phone-slide1.jpg" width="100%" height="100%" alt="phone-pic"/>
                                   </div>   
                              </div>
                        </div>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>
                  </div>

                  {/* <div className={clx(styles.hpc_phone__frame)}>
                    
                    <div className={clx(styles.hpc_phone__slide,styles.hpc_phone__slide__current)}>
                        <Image className={clx(styles.hpc_phone__slide_current)}  src="/images/phone-slide1_.jpg" width="100%" height="100%" alt="phone-pic"/>
                    </div>
                
                    <div
                      className={clx(styles.hpc_phone__cover)} 
                      style={{transform:`rotate(${hpc_phone_degree}deg) translateX(${hpc_phone_x}px) translateY(${hpc_phone_y}px)`}}> 
                    </div>

                </div> */}

                  {/* <div className={clx(styles.hpc_phone__slide_current)} >
                    <Image src="/images/phone-slide1_.jpg" width="348px" height="556px" alt="phone-pic"/>
                 </div> */}

                  {/* <div 
                  className={clx(styles.hpc_tablet__cover)} 
                  style={{transform:`rotate(${hpc_tablet_degree}deg) translateX(${hpc_tablet_x}px) translateY(${hpc_tablet_y}px)`}}> 
                </div> */}

                  <div
                    className={clx(styles.hpc_pics_container)}
                    style={{
                      transform: `rotate(${hpc_pics_degree}deg) translateX(${hpc_pics_x}vw) translateY(${hpc_pics_y}vh)`,
                    }}
                  >
                    <div
                      className={clx(
                        styles.hpc_pics,
                        hpc_pics_bg[getCurrentSloganIndex()]
                      )}
                    >
                      {" "}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} id="2">
            <div className={styles.grid2}>
              <Grid
                container
                id="sec2"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec21" xs={12} md={6}>
                  <div className={styles.sec21}></div>
                </Grid>
                <Grid item id="sec22" xs={12} md={6}>
                  <div className={styles.sec22}></div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={12} id="3">
            <div className={styles.grid3}>
              <Grid
                container
                id="sec3"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec31" xs={12} md={6}>
                  <div className={styles.sec31}></div>
                </Grid>
                <Grid item id="sec32" xs={12} md={6}>
                  <div className={styles.sec32}></div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} id="4">
            <div className={styles.grid4}>
              <Grid
                container
                id="sec4"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec41" xs={12} md={6}>
                  <div className={styles.sec41}></div>
                </Grid>
                <Grid item id="sec42" xs={12} md={6}>
                  <div className={styles.sec42}></div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} id="5">
            <div className={styles.grid5}>
              <Grid
                container
                id="sec5"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec51" xs={12} md={6}>
                  <div className={styles.sec51}></div>
                </Grid>
                <Grid item id="sec52" xs={12} md={6}>
                  <div className={styles.sec52}></div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} id="6">
            <div className={styles.grid6}></div>
          </Grid>
          <Grid item xs={12} id="7">
            <div className={styles.grid7}>
              <Grid
                container
                id="sec7"
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item id="sec71" xs={12} md={4}>
                  <div className={styles.sec71}></div>
                </Grid>
                <Grid item id="sec72" xs={12} md={4}>
                  <div className={styles.sec72}></div>
                </Grid>
                <Grid item id="sec73" xs={12} md={4}>
                  <div className={styles.sec73}></div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} id="8">
            <div className={styles.grid8}></div>
          </Grid>
        </Grid>
      </div>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by inisashop.com
        </a>
      </footer>
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
