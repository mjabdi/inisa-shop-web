import Head from "next/head";
import styles from "../styles/Home-Mobile.module.scss";
import AppBar from "../components/home/app-bar";
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
 
  return (
    <>
        <div className={styles.container}>
            This is the mobile version
        </div>
    </>
  );
};

export default MobileHome;
