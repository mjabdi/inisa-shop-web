import Head from "next/head";
import styles from "../styles/Home-Mobile.module.scss";
import AppBar from "../components/home/app-bar-mobile";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import clx from "classnames";
import Button from "@material-ui/core/Button";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";




const MobileHome = () => {
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

  // const hpc_pics_bg = [
  //   styles.hpc_pics_bg_yellow,
  //   styles.hpc_pics_bg_magenta,
  //   styles.hpc_pics_bg_green,
  //   styles.hpc_pics_bg_indigo,
  // ];

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

  // const [phoneCurrentClass, setPhoneCurrentClass] = React.useState(
  //   clx(styles.hpc_phone_slide)
  // );

  // const [phoneNextClass, setPhoneNextClass] = React.useState(
  //   clx(styles.hpc_phone_slide)
  // );

  // const [currentPhoneImage, setCurrentPhoneImage] = React.useState(
  //   sloganArray[0].phoneImage
  // );
  // const [nextPhoneImage, setNextPhoneImage] = React.useState(
  //   sloganArray[1].phoneImage
  // );

  // const [currentTabletImage, setCurrentTabletImage] = React.useState(
  //   sloganArray[0].tabletImage
  // );
  // const [nextTabletImage, setNextTabletImage] = React.useState(
  //   sloganArray[1].tabletImage
  // );

  const [phoneCoverClass, setPhoneCoverClass] = React.useState(
    clx(styles.hpc_phone__cover)
  );
  const [tabletCoverClass, setTabletCoverClass] = React.useState(
    clx(styles.hpc_tablet__cover)
  );
  // const [picsContainerClass, setPicsContainerClass] = React.useState(
  //   styles.hpc_pics_container
  // );

  const [slideTriggered, setSlideTriggered] = React.useState(false);

  const [scrollTop, setScrollTop] = React.useState(0);

  const [windowWidth, setWindowWidth] = React.useState(-1);

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

    // setTimeout(() => {
    //   setPicsContainerClass(
    //     clx(
    //       styles.hpc_pics_container,
    //       styles.hpc_pics_container_load,
    //       styles.hpc_animate_delay_1
    //     )
    //   );
    // }, 2400);

    setTimeout(() => {
      setTabletCoverClass(
        clx(
          styles.hpc_tablet__cover,
          styles.hpc_tablet__cover_load,
          styles.hpc_animate_delay_5
        )
      );
    }, 2800);

    return () => {
      clearInterval(sloganTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // React.useEffect(() => {
  //   if (slideTriggered) {
      ///************* Slide Phone Image */

      // setTimeout(() => {
      //   setPhoneCurrentClass(clx(styles.hpc_phone_slide));
      //   setPhoneNextClass(clx(styles.hpc_phone_slide));
      // }, 50);

      // setTimeout(() => {
      //   setPhoneCurrentClass(
      //     clx(styles.hpc_phone_slide, styles.hpc_phone_slide_current)
      //   );
      //   setPhoneNextClass(
      //     clx(styles.hpc_phone_slide, styles.hpc_phone_slide_next)
      //   );
      // }, 100);

      ///************* end Slide Phone Image */

      // setTimeout(() => {
      //   setCurrentPhoneImage(sloganArray[sloganArrayIndex].phoneImage);
      //   setNextPhoneImage(
      //     sloganArrayIndex < sloganArray.length - 1
      //       ? sloganArray[sloganArrayIndex + 1].phoneImage
      //       : sloganArray[0].phoneImage
      //   );

      //   setCurrentTabletImage(sloganArray[sloganArrayIndex].tabletImage);
      //   setNextTabletImage(
      //     sloganArrayIndex < sloganArray.length - 1
      //       ? sloganArray[sloganArrayIndex + 1].tabletImage
      //       : sloganArray[0].tabletImage
      //   );
      // }, 800);
  //   }
  // }, [sloganArrayIndex]);

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

  // const getTabletXOffset1 = () => {
  //   let x = 100 + ((windowWidth - 1200) / 720) * 180;
  //   return x;
  // };

  // const getTabletXOffset2 = () => {
  //   let x = 300 + ((windowWidth - 1200) / 720) * 180;
  //   return x;
  // };

  // const getTabletYOffset1 = () => {
  //   let y = 250 + ((windowWidth - 1200) / 720) * 100;
  //   return y;
  // };

  // const getCornerOffset = () => {
  //   let y = -((windowWidth / 500) * 80);
  //   return y;
  // };

  return (
    <>
      <AppBar />
        <div className={styles.container}>
            <Grid
                  container
                  id="sellerhome"
                  direction="column"
                  justify="center"
                  alignItems="stretch"
                >
                  <Grid item xs={12} id="1">
                  <div className={styles.sec11} style={{padding:"10%", textAlign:"right"}}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="stretch"
                        >
                          <div style={{ paddingTop: "27%" }}>
                            <Grid item>
                              <h1 className={hpcAnimationClasses}>
                                <div >همین حالا آغاز کنید</div>
                                <div >
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





                  <Grid item xs={12} id="2">
                    <div className={styles.grid2}>
                      <Grid
                            container
                            direction="row-reverse"
                            justify="center"
                            alignItems="stretch"
                          >
                            <Grid item xs="4">
                               <div className={phoneCoverClass} >
                                          <div className={clx(styles.hpc_phone__frame)}>


                                                  <div className={styles.hpc_phone_slide} >
                                                      <img
                                                          src={sloganArray[0].phoneImage}
                                                          width="100%"
                                                          height="100%"
                                                          alt="phone-pic"
                                                          
                                                      />
                                                  </div>


                                          </div>
                                </div>

                            </Grid>
                            <Grid item xs="8">
                               <div className={tabletCoverClass}>
                                          <div className={clx(styles.hpc_tablet__frame)}></div>
                                </div>
                            </Grid>
                        </Grid>
                      </div>
                  </Grid>
                </Grid>
        </div>
    </>
  );
};

export default MobileHome;
