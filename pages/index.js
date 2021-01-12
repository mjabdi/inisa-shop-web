import Head from "next/head";
import styles from "../styles/Home.module.scss";
import AppBar from "../components/home/app-bar";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import clx from "classnames";
import classNames from "classnames/bind";

import Button from "@material-ui/core/Button";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, Reveal } from "react-gsap";
import Fade from "react-reveal/Fade";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isTablet,
} from "react-device-detect";
import MobileHome from "./index.mobile";
import { Translate } from "@material-ui/icons";

let cx = classNames.bind(styles);

const scrollDuration = 900;

const FadeInLeft = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

const Home = () => {
  const sloganArray = [
    {
      title: "فروش آنلاین محصول",
      bg: styles.hpc_underlined_yellow,
      phoneImage: "/images/phone-slide1.jpg",
      tabletImage: "/images/tablet-slide1.jpg",
    },
    {
      title: "اتصال به اینستاگرام",
      bg: styles.hpc_underlined_magenta,
      phoneImage: "/images/phone-slide2.jpg",
      tabletImage: "/images/tablet-slide2.jpg",
    },
    {
      title: "فروش روی وب سایت",
      bg: styles.hpc_underlined_green,
      phoneImage: "/images/phone-slide3.jpg",
      tabletImage: "/images/tablet-slide3.jpg",
    },
    {
      title: "راه اندازی کسب و کار",
      bg: styles.hpc_underlined_indigo,
      phoneImage: "/images/phone-slide4.jpg",
      tabletImage: "/images/tablet-slide4.jpg",
    },
  ];

  const hpc_pics_bg = [
    styles.hpc_pics_bg_yellow,
    styles.hpc_pics_bg_magenta,
    styles.hpc_pics_bg_green,
    styles.hpc_pics_bg_indigo,
  ];

  const section2Ref = React.useRef(null);

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

  const [phoneCurrentClass, setPhoneCurrentClass] = React.useState(
    clx(styles.hpc_phone_slide)
  );

  const [phoneNextClass, setPhoneNextClass] = React.useState(
    clx(styles.hpc_phone_slide)
  );

  const [currentPhoneImage, setCurrentPhoneImage] = React.useState(
    sloganArray[0].phoneImage
  );
  const [nextPhoneImage, setNextPhoneImage] = React.useState(
    sloganArray[1].phoneImage
  );

  const [currentTabletImage, setCurrentTabletImage] = React.useState(
    sloganArray[0].tabletImage
  );
  const [nextTabletImage, setNextTabletImage] = React.useState(
    sloganArray[1].tabletImage
  );

  const [phoneCoverClass, setPhoneCoverClass] = React.useState(
    clx(styles.hpc_phone__cover)
  );
  const [tabletCoverClass, setTabletCoverClass] = React.useState(
    clx(styles.hpc_tablet__cover)
  );
  const [picsContainerClass, setPicsContainerClass] = React.useState(
    styles.hpc_pics_container
  );

  const [slideTriggered, setSlideTriggered] = React.useState(false);

  const [scrollTop, setScrollTop] = React.useState(0);

  const [windowWidth, setWindowWidth] = React.useState(-1);

  const [chevroLoad, setchevroLoad] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    const sloganTimer = setInterval(() => {
      setSloganIndex((prev) => {
        if (prev < sloganArray[sloganArrayIndex].title.length * 4) {
          return prev + 1;
        } else {
          setSloganArrayIndex((prev) =>
            prev < sloganArray.length - 1 ? prev + 1 : 0
          );
          setSlideTriggered(true);
          return 0;
        }
      });
    }, 60);

    setTimeout(() => {
      setHpcAnimationClasses(
        clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_1)
      );
      setHpcAnimationClasses2(
        clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_2)
      );
      setHpcAnimationClasses3(
        clx(styles.hpc_animate_from_left, styles.hpc_animate_delay_3)
      );
    }, 500);

    setTimeout(() => {
      setPhoneCoverClass(
        clx(
          styles.hpc_phone__cover,
          styles.hpc_phone__cover_load,
          styles.hpc_animate_delay_5
        )
      );
    }, 2000);

    setTimeout(() => {
      setPicsContainerClass(
        clx(
          styles.hpc_pics_container,
          styles.hpc_pics_container_load,
          styles.hpc_animate_delay_1
        )
      );
    }, 2400);

    setTimeout(() => {
      setTabletCoverClass(
        clx(
          styles.hpc_tablet__cover,
          styles.hpc_tablet__cover_load,
          styles.hpc_animate_delay_5
        )
      );
    }, 2800);

    setTimeout(() => {
      setchevroLoad(true);
    }, 3000);

    return () => {
      clearInterval(sloganTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  React.useEffect(() => {
    if (slideTriggered) {
      ///************* Slide Phone Image */

      setTimeout(() => {
        setPhoneCurrentClass(clx(styles.hpc_phone_slide));
        setPhoneNextClass(clx(styles.hpc_phone_slide));
      }, 50);

      setTimeout(() => {
        setPhoneCurrentClass(
          clx(styles.hpc_phone_slide, styles.hpc_phone_slide_current)
        );
        setPhoneNextClass(
          clx(styles.hpc_phone_slide, styles.hpc_phone_slide_next)
        );
      }, 100);
    }
  }, [sloganArrayIndex]);

  const onAnimationEnd = () => {
    setCurrentPhoneImage(sloganArray[sloganArrayIndex].phoneImage);
    setNextPhoneImage(
      sloganArrayIndex < sloganArray.length - 1
        ? sloganArray[sloganArrayIndex + 1].phoneImage
        : sloganArray[0].phoneImage
    );

    setCurrentTabletImage(sloganArray[sloganArrayIndex].tabletImage);
    setNextTabletImage(
      sloganArrayIndex < sloganArray.length - 1
        ? sloganArray[sloganArrayIndex + 1].tabletImage
        : sloganArray[0].tabletImage
    );
  };

  const handleLoad = (event) => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = (event) => {
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const _scrollTop = parseInt((window.scrollY / window.innerHeight) * 100);
    setScrollTop(_scrollTop);
  };

  const getCurrentSlogan = () => {
    return sloganArray[getCurrentSloganIndex()];
  };

  const getCurrentSloganIndex = () => {
    return scrollTop > 1 ? 0 : sloganArrayIndex;
  };

  const getSloganPart = () => {
    return getCurrentSlogan().title.substr(0, sloganIndex);
  };

  const getTabletXOffset1 = () => {
    let x = 100 + ((windowWidth - 1200) / 720) * 180;
    return x;
  };

  const getTabletXOffset2 = () => {
    let x = 300 + ((windowWidth - 1200) / 720) * 180;
    return x;
  };

  const getTabletYOffset1 = () => {
    let y = 250 + ((windowWidth - 1200) / 720) * 100;
    return y;
  };

  const getCornerOffset = () => {
    let y = -((windowWidth / 500) * 80);
    return y;
  };

  const chevronClicked = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>{"اینیساشاپ"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isBrowser && windowWidth < 1024 && <MobileHome />}

      {isMobile && <MobileHome />}

      {isTablet && <MobileHome />}

      {isBrowser && windowWidth >= 1024 && (
        <React.Fragment>
          <AppBar />

          <div
            hidden={scrollTop > 10}
            onClick={chevronClicked}
            className={cx({ hpc_chevron: true, hpc_chevron_load: chevroLoad })}
            id="hpc_chevron"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>Chevron</title>
              <polyline
                fill="none"
                stroke="#3A4A59"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                points=".222 4.222 15.778 4.222 15.778 19.778"
                transform="rotate(45 8 12)"
              ></polyline>
            </svg>
          </div>

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
                    <Grid item id="sec11" xs={12} md={4}>
                      <div className={styles.sec11}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="stretch"
                        >
                          <div style={{ paddingTop: "30%" }}>
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
                              <p
                                className={hpcAnimationClasses2}
                                style={{ textAlign: "justify" }}
                              >
                                با ما فروش آنلاین را تجربه کنید. با اینیسا،
                                فروشگاه رایگان خود را برای همیشه داشته باشید.
                                یکبار ثبت نام کنید و همیشه استفاده کنید.
                              </p>
                              <div className={hpcAnimationClasses3}>
                                <Button
                                  style={{
                                    backgroundColor: "#111111",
                                    color: "#fff",
                                    width: "250px",
                                    padding: "10px",
                                    // marginRight: "250px",
                                    marginTop: "20px",
                                    fontSize: "1rem",
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

                    {windowWidth > 0 && (
                      <Grid item id="sec12" xs={12} md={7}>
                        <div className={styles.phone_container}>
                          <Grid
                            container
                            direction="row-reverse"
                            justify="flex-end"
                            alignItems="flex-start"
                          >
                            <Grid item md={8}>
                              <Controller>
                                <Scene
                                  // triggerHook="onScroll"
                                  triggerElement="#sec12"
                                  duration={scrollDuration}
                                  //pin
                                >
                                  {(progress) => (
                                    <Timeline totalProgress={progress} paused>
                                      <Tween
                                        from={{
                                          css: {
                                            margin: "10vh 25vw auto 20vw",
                                            transform:
                                              "matrix(0.86603, 0.5, -0.5, 0.86603, 0, 0)",
                                          },
                                          ease: "Strong.easeOut",
                                        }}
                                        to={{
                                          css: {
                                            margin: "105vh 10vw auto 20vw",
                                            transform:
                                              "matrix(1, 0.0, 0.0, 1 , 0, 0)",
                                          },
                                          ease: "Strong.easeOut",
                                        }}
                                        totalProgress={progress}
                                        paused
                                      >
                                        <div className={phoneCoverClass}>
                                          <div
                                            className={clx(
                                              styles.hpc_phone__frame
                                            )}
                                          >
                                            <div className={phoneNextClass}>
                                              <img
                                                src={nextPhoneImage}
                                                width="100%"
                                                height="100%"
                                                alt="phone-pic"
                                              />
                                            </div>
                                            <div
                                              className={phoneCurrentClass}
                                              onAnimationEnd={onAnimationEnd}
                                            >
                                              <img
                                                src={currentPhoneImage}
                                                width="100%"
                                                height="100%"
                                                alt="phone-pic"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </Tween>
                                    </Timeline>
                                  )}
                                </Scene>
                              </Controller>
                            </Grid>

                            <Grid item md={4}>
                              <Controller>
                                <Scene
                                  triggerElement="#sec12"
                                  // triggerHook="onScroll"
                                  duration={scrollDuration}
                                  //pin
                                >
                                  {(progress) => (
                                    <Timeline totalProgress={progress} paused>
                                      <Tween
                                        from={{
                                          css: {
                                            margin: "10vh auto auto auto",
                                            transform: `matrix(0.86603, 0.5, -0.5, 0.86603, ${getTabletXOffset1()}  ,  ${getTabletYOffset1()})`,
                                          },
                                          ease: "Strong.easeOut",
                                        }}
                                        to={{
                                          css: {
                                            margin: "105vh auto auto auto",
                                            transform: `matrix(1, 0.0, 0.0, 1 , ${getTabletXOffset2()}, -50)`,
                                          },
                                          ease: "Strong.easeOut",
                                        }}
                                        totalProgress={progress}
                                        paused
                                      >
                                        <div className={tabletCoverClass}>
                                          <div
                                            className={clx(
                                              styles.hpc_tablet__frame
                                            )}
                                          >
                                            <div className={phoneNextClass}>
                                              <img
                                                src={nextTabletImage}
                                                width="100%"
                                                height="100%"
                                                alt="phone-pic"
                                              />
                                            </div>
                                            <div className={phoneCurrentClass}>
                                              <img
                                                src={currentTabletImage}
                                                width="100%"
                                                height="100%"
                                                alt="phone-pic"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </Tween>
                                    </Timeline>
                                  )}
                                </Scene>
                              </Controller>
                            </Grid>
                          </Grid>
                        </div>

                        <Controller>
                          <Scene
                            triggerElement="#sec12"
                            //  triggerHook="onScroll"
                            duration={1200}
                            //pin
                          >
                            {(progress) => (
                              <Timeline totalProgress={progress} paused>
                                <Tween
                                  from={{
                                    css: {
                                      margin: "0vh -5vw auto auto",
                                      transform:
                                        "matrix(0.86603, 0.5, -0.5, 0.86603, 0, 0)",
                                    },
                                    ease: "Strong.easeOut",
                                  }}
                                  to={{
                                    css: {
                                      margin: "-40vh -35vw auto auto",
                                      transform: "matrix(1, 0, 0, 1 , 0, 0)",
                                    },
                                    ease: "Strong.easeOut",
                                  }}
                                  totalProgress={progress}
                                  paused
                                >
                                  <div className={picsContainerClass}>
                                    <div
                                      className={clx(
                                        styles.hpc_pics,
                                        hpc_pics_bg[getCurrentSloganIndex()]
                                      )}
                                    >
                                      {" "}
                                    </div>
                                  </div>
                                </Tween>
                              </Timeline>
                            )}
                          </Scene>
                        </Controller>
                      </Grid>
                    )}
                  </Grid>
                </div>
              </Grid>

              {windowWidth > 0 && (
                <Grid item xs={12} id="2">
                  <div className={styles.grid2}>
                    <Grid
                      container
                      id="sec2"
                      ref={section2Ref}
                      direction="row-reverse"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item id="sec21" xs={12} md={6}>
                        <div style={{ position: "relative" }}>
                          <Fade left>
                            <div id="sec21Text" className={styles.sec21Text}>
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid item>
                                  <div className={styles.sec21Text_Title}>
                                    با ساخت رایگان فروشگاه خود تنها چند کلیک
                                    فاصله دارید !!
                                  </div>

                                  <div className={styles.sec21Text_Subtitle}>
                                    به هزاران فروشگاه اینترنتی که به اینیساشاپ
                                    اعتماد کرده اند بپیوندید و محصولات خود را
                                    آنلاین بفروشید.
                                  </div>

                                  <div className={styles.sec21ButtonContainer}>
                                    <Button
                                      style={{
                                        backgroundColor: "#111111",
                                        color: "#fff",
                                        width: "250px",
                                        padding: "10px",
                                        // marginRight: "250px",
                                        marginTop: "20px",
                                        fontSize: "1rem",
                                      }}
                                      type="button"
                                      variant="contained"
                                    >
                                      رایگان فروشگاه بساز
                                    </Button>
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                          </Fade>

                          <div className={styles.sec21}>
                            <Controller>
                              <Scene
                                triggerElement="#sec12"
                                // triggerHook="onScroll"
                                duration={scrollDuration}
                                //pin
                              >
                                {(progress) => (
                                  <Timeline totalProgress={progress} paused>
                                    <Tween
                                      from={{
                                        css: {
                                          // margin: "0vh -5vw auto auto",

                                          transform: `matrix(0.86603, 0.5, -0.5, 0.86603, 0, ${getCornerOffset()})`,
                                        },
                                        ease: "Strong.easeOut",
                                      }}
                                      to={{
                                        css: {
                                          transform: "matrix(1, 0, 0, 1, 0, 0)",
                                        },
                                        ease: "Strong.easeOut",
                                      }}
                                      totalProgress={progress}
                                      paused
                                    >
                                      <div className={clx(styles.hpc_sec21)}>
                                        {" "}
                                      </div>
                                    </Tween>
                                  </Timeline>
                                )}
                              </Scene>
                            </Controller>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              )}

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
        </React.Fragment>
      )}
    </>
  );
};

export default Home;
