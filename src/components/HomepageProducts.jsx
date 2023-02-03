import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {  Container, Box, CardActionArea } from '@mui/material';
import styles from './Homepage.module.css';
import clsx from 'clsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ProductsList = [

  {
    title: 'Secure Workforce',
    alt: 'alt text for image',
    description: (
      <>
        Secure Workforce protects and verifies corporate identities and their devices providing for a secure and trustworthy development process.
      </>
    ),
    href: ('https://support.beyondidentity.com/hc/en-us'),
    label: ('Learn more'),
  },
  {
    title: 'Secure DevOps',
    alt: 'alt text for image',
    description: (
      <>
        Secure DevOps safeguards your company resources and closes data breach vectors by ensuring that only authorized users and devices have access to cloud resources.
      </>
    ),
    href: ('/portfolio/docs/api/api-example-bflix'),
    label: ('Learn more'),
  },
  {
    title: 'Secure Customer',
    alt: 'alt text for image',
    description: (
      <>
        Secure Customer provides your customers with zero-friction passwordless authentication. 
      </>
    ),
    href: ('https://developer.beyondidentity.com/'),
    label: ('Learn more'),
  },
];

function Product({ title, description, href }) {
  return (
    
    <div className={clsx('col col--4', styles.product)}>
      
<Card sx={{minHeight: 230,  p: 2, borderRadius: 4 }} elevation={4}>
      <CardActionArea href={href}>
        

      <CardContent>

    <Typography
      gutterBottom 
      variant="h4" 
      component="div"
      sx={{
        fontWeight: 500,
        fontFamily: 'Overpass',
      }} 
    >
          {title} 
        </Typography>

      

        <Typography variant="p" sx={{
        fontWeight: 400,
        fontFamily: 'Overpass',
      }}>
          {description}
        </Typography>
      </CardContent>


</CardActionArea>
</Card>
    </div>
    
  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className="container">
      
        <div className={clsx('row', styles.productsRow)}>
        
        <div className="container">
      <Typography variant="h5" align="center" paragraph={true} gutterBottom={true} sx={{
        fontWeight: 300,
        fontFamily: 'Overpass',
      }} >Welcome to Beyond Identity's documentation resource center. Here you'll find information on the various products we offer. These guides are intended to provide the information and tools needed to start a passwordless journey with Beyond Identity. <a href="#" data-tooltip="A realm is a unique administrative domain within a tenant. Each realm contains a unique set of Directory, Policy, Event, Application, and Branding objects.">Realm</a></Typography>
</div>
          {ProductsList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}