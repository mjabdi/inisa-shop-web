import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './facility-card.module.css';




export default function OutlinedCard(props) {

  return (
    <div className={styles.card}>
      <div className={styles.title}>
          {props.title}
      </div>

      <div className={styles.content}>
        <p>
            {props.description}
        </p>
         
      </div>

    </div>

  );
}