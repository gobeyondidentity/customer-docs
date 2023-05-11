import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import styles from './LandingPage.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DiscoverList = [
  {
    title: 'Get started',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        <b>New to Beyond Identity?</b> Get started by requesting to have your tenant created. Then you can configure and customize it.  
      </>
    ),
    href: ('/get-started'),
    label: ('Learn more'),
  },
  {
    title: 'Integration guides',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         <b>Want to integrate with a third-party platform?</b> Find instructions for the third-party platforms we support.
      </>
    ),
    href: ('/integration-guides'),
    label: ('Learn more'),
  },
  {
    title: 'Rules & policies',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
          Customize access decisions based on various attributes from various sources.
      </>
    ),
    href: ('/policy'),
    label: ('Learn more'),
  },
  {
    title: 'Date & Insights',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         View information of events associated with user or device activity.
      </>
    ),
    href: ('/data-events'),
    label: ('Learn more'),
  },
  {
    title: 'Admin console',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         View authentications, new device setups, and newly registered users.
      </>
    ),
    href: ('/admin-console'),
    label: ('Learn more'),
  },
  {
    title: 'Platform authenticators',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         Install and manage updates and notifications for the native branded authenticator app.
      </>
    ),
    href: ('/platform-authenticator'),
    label: ('Learn more'),
  },
];

function Topic({ title, description, href }) {
  return (
    
  <div className={clsx('col col--6', styles. topic)}>
  <Card sx={{ minHeight: 'auto', p: 3, borderRadius: 4 }}  elevation={1}>
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

export default function DiscoverBi() {
  return (
    <section className={styles.topics}>
      <div sx={{ marginLeft: 0, marginTop: -1 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {DiscoverList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      
      </div>
    </section>
  );
}