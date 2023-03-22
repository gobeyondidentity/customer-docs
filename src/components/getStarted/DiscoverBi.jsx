import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './LandingPage.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const GetStartedList = [
  {
    title: 'Error messages',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Writing error messages can be challenging because you want them to be short but have enough information to help the user. Your overall goal is to guide the user to prevent dead ends. 
      </>
    ),
    href: ('/docs/get-started'),
    label: ('Learn more'),
  },
];

function Topic({ Svg, title, description, href }) {
  return (
    
    <div className={clsx('col col--4', styles. topic)}>
<Card sx={{ minHeight: 370, p: 2, borderRadius: 4 }} elevation={9}>
      <CardActionArea href={href}>
        

      <div className="text--center">
        <Svg className={styles. topicSvg} alt={title} />
      </div>

      


      <CardContent>

    <Typography
      gutterBottom 
      variant="h4" 
      component="div"
      sx={{
        fontWeight: 500,
        fontFamily: 'NTR',
      }} 
    >
          {title} 
        </Typography>

      

        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>


</CardActionArea>
</Card>
    </div>
    
  );
}

export default function DiscoverBi() {
  return (
    <section className={styles. topics}>
      <div className="container">
        
        <div className={clsx('row', styles. topicsRow)}>
          {GetStartedList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}