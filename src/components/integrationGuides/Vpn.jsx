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
    title: 'Cisco AnyConnect',
//    Svg: require('@site/static/img/Details-page-02.svg').default,
    alt: 'alt text for image',
    description: (
      <>
         
      </>
    ),
    href: ('/cisco-anyconnect'),
    label: ('Learn more'),
  },
];

function Vpn({ title, description, href }) {
  return (
    
    <div className={clsx('col col--6', styles.topic)}>
  <Card sx={{ minHeight: 'auto', p: 2, borderRadius: 4, width: '100%' }}  elevation={1}>
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

export default function VpnGuides() {
  return (
    <section className={styles.topics}>
      <div sx={{ marginLeft: 0, marginTop: 0 }}>
        <div className={clsx('row', styles.topicsRow)}>
          {List.map((props, idx) => (
            <Vpn key={idx} {...props} />
          ))}
        </div>
      
      </div>
    </section>
  );
}