import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './IntegrationGuides.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const List = [
  {
    title: 'Auth0',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/auth0'),
    label: ('Learn more'),
  },
  {
    title: 'AWS',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/aws'),
    label: ('Learn more'),
  },
  {
    title: 'Azure Hybrid',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/azure-ad-hybrid'),
    label: ('Learn more'),
  },
  {
    title: 'Azure only',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/azure-ad'),
    label: ('Learn more'),
  },
  {
    title: 'Egnyte',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/egnyte'),
    label: ('Learn more'),
  },
  {
    title: 'ForgeRock',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/forgerock'),
    label: ('Learn more'),
  },
  {
    title: 'Google Workspace',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/google-workspace'),
    label: ('Learn more'),
  },
  {
    title: 'Idaptive',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/idaptive'),
    label: ('Learn more'),
  },
  {
    title: 'KeyCloak',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/keycloak'),
    label: ('Learn more'),
  },
  {
    title: 'Microsoft ADFS',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/microsoft-adfs'),
    label: ('Learn more'),
  },
  {
    title: 'Okta (classic)',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/okta-classic'),
    label: ('Learn more'),
  },
  {
    title: 'Okta MFA (classic)',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/okta-mfa-classic'),
    label: ('Learn more'),
  },
  {
    title: 'Okta (OIE)',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/okta-oie'),
    label: ('Learn more'),
  },
  {
    title: 'Okta MFA (OIE)',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/okta-oie-mfa'),
    label: ('Learn more'),
  },
  {
    title: 'Okta Persistent Enrollment',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/okta-persistent-enrollment'),
    label: ('Learn more'),
  },
  {
    title: 'OneLogin',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/onelogin'),
    label: ('Learn more'),
  },
  {
    title: 'PingFederate',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/ping'),
    label: ('Learn more'),
  },
  {
    title: 'PingFederate SCIM Server',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/ping-scim-server'),
    label: ('Learn more'),
  },
  {
    title: 'PingFederate MFA',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/ping-mfa'),
    label: ('Learn more'),
  },
  {
    title: 'Shibboleth',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/shibboleth'),
    label: ('Learn more'),
  },
  {
    title: 'VMware Access Manager',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
        
      </>
    ),
    href: ('/vmware-access-manager'),
    label: ('Learn more'),
  },
];

function WorkforceSso({ title, description, href }) {
  return (
    
    <div className={clsx('col col--6', styles.topic)}>
  <Card sx={{ minHeight: 'auto', p: 2, borderRadius: 4, width: '100%' }} elevation={4}>
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

export default function WorkforceSsoGuides() {
  return (
    <section className={styles.topics}>
      <Container sx={{ marginLeft: 0, marginTop: 0 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {List.map((props, idx) => (
            <WorkforceSso key={idx} {...props} />
          ))}
        </div>
      
      </Container>
    </section>
  );
}