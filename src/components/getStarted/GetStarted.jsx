import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea, CardActions, Link } from '@mui/material';
import styles from './LandingPage.module.css';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { right } from '@popperjs/core';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const GetStartedList = [
  {
    title: 'How Beyond Identity works',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Learn how Beyond Identity authenticates users and their devices, controlling who and what devices can access your SaaS apps and cloud infrastructure.
      </>
    ),
    href: ('/how-it-works'),
    label: ('Learn more'),
  },
  {
    title: 'User sign-in flow',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Learn more about how Beyond Identity works and the user sign-in workflow.  
      </>
    ),
    href: ('/sign-in-workflow'),
    label: ('Learn more'),
  },
  {
    title: 'Supported operating systems',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Find out what operating systems versions Beyond Identity supports.  We support Windows, macOS, Linux, Android, and iOS/iPadOS. 
      </>
    ),
    href: ('/supported-platforms'),
    label: ('Learn more'),
  },
  {
    title: 'Release notes',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        If you deployed Beyond Identity Cloud, Platform Authenticators, and Desktop Login, you'll receive the latest updates as we release them. 
      </>
    ),
    href: ('/release-notes-main'),
    label: ('Learn more'),
  },
  {
    title: 'FAQs',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Discover common questions a customer asks or would ask about using and troubleshooting the product.   
      </>
    ),
    href: ('/faq'),
    label: ('Learn more'),
  },
  {
    title: 'Terminology',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        Learn about the terms Beyond Identity uses.  
      </>
    ),
    href: ('/glossary'),
    label: ('Learn more'),
  },
];

function Topic({ title, description, href }) {
  return (
    
  <div className={clsx('col col--6', styles.topic)}>
  <Card sx={{ minHeight: 'auto', p: 2, borderRadius: 3, m: 0 }}  elevation={1}>
      
        <CardContent>
          <Typography
              gutterBottom 
              variant="h6" 
              component="div"
              sx={{
                fontWeight: 500,
                fontFamily: 'Overpass',
                textAlign: 'left',
                color: '#3e5fb8',
              }} 
            >
            {title} 
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Overpass', lineHeight: 1.3 }}>
            {description}
          </Typography>
      </CardContent>

      <CardActions>

        <Button href={href} sx={{ textAlign: 'right', color: '#3e5fb8'}}>Learn More</Button>

      
      </CardActions>

  </Card>
  </div>
  );
}

export default function GetStarted() {
  return (
    <section className={styles.topics}>
      <div sx={{ marginLeft: 0, marginTop: 0 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {GetStartedList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      
      </div>
    </section>
  );
}