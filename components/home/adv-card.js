import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./adv-card.module.scss";
import Image from "next/image";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AdvCard({title, icon, desc, info}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={styles.adv_card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Image src={icon} width="85px" height="85px"></Image>
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography variant="body2" component="p">
          {desc}
          <br />
          <br />
          <br />
          "'{info}'"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{paddingRight:"11px"}}>بیشتر بدانیم</Button>
      </CardActions>
    </Card>
  );
}