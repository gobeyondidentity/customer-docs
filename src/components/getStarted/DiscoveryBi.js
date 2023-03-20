import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Grid, Box } from '@site/src/components/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from '../LandingPage.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const TopicsList = [
  {
    title: <>Windows Azure Only</>,
    href: '/integration-guides/azure-ad',
    category: 'desktop-login',
    description: (
      <>
        Windows Azure AD Join Machines
      </>
    )
  },
  {
    title: <>Windows Hybrid</>,
    href: '/integration-guides/azure-ad-hybrid',
    category: 'desktop-login',
    description: (
      <>
        Learn how ...
      </>
    )
  },
  {
    title: <>Windows Active Directory</>,
    href: '/integration-guides/active-directory-on-premises',
    category: 'desktop-login',
    description: (
      <>
        Learn how ...
      </>
    )
  },

];

function Topic({ title, description, href }) {
  return (
    
    <div className={clsx('col col--4', styles.topic)}>
      
<Card sx={{ maxWidth: 250, fontFamily: 'Overpass', }} key={idx}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {title} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <CardActionArea href={href}>
                    <Button size="small">Learn More</Button>
                    </CardActionArea>
                  </CardActions>
                </Card>
    </div>
    
  );
}

export default function Discovery() {
  return (
    <section className={styles.topics}>
      <div className="container">
        
        <div className={clsx('row', styles.topicsRow)}>
          {TopicsList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}