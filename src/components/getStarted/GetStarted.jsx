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
    title: 'Step 1. Create your tenant',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
       A tenant provides a way to group users who share similar privileges. At this time, Beyond Identity creates a tenant after you've completed the request form.
      </>
    ),
    href: ('/create-tenant'),
    label: ('Learn more'),
  },
  {
    title: 'Step 2. Configure Beyond Identity account',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         Once your account has been created with Beyond Identity, you'll be able to configure a few values specific to your account. 
      </>
    ),
    href: ('/configure-account'),
    label: ('Learn more'),
  },
  {
    title: 'Step 3. Configure OIDC connection',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         OpenID Connect (OIDC) is an identity layer built on top of OAuth2.0, letting users authenticate into your app. 
      </>
    ),
    href: ('/configure-oidc-connection'),
    label: ('Learn more'),
  },
  {
    title: 'Step 4. Register redirect URI',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         The URI lets Beyond Identity know where to redirect new users to verify their identity.
      </>
    ),
    href: ('/set-redirect-uri'),
    label: ('Learn more'),
  },
];

function Topic({ title, description, href }) {
  return (
    
    <div className={clsx('col col--6', styles. topic)}>
  <Card sx={{ minHeight: 'auto', p: 2, borderRadius: 4 }} elevation={1}>
      <CardActionArea href={href}>
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
                lineHeight: '1.2',
              }} 
            >
            {title} 
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'Overpass', lineHeight: 1.3 }}>
            {description}
          </Typography>
      </CardContent>
    </CardActionArea>
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