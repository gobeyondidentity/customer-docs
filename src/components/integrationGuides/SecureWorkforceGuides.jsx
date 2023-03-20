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


const GuideItems = [

  {
    title: 'Secure Workforce',
    alt: 'alt text for image',
    description: (
      <>
        Secure Workforce protects and verifies corporate identities and their devices providing for a secure and trustworthy development process.
      </>
    ),
    href: ('/guides'),
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

const GuideCategories = [
  {
    label: 'step-by-step',
    title: 'Step-by-step',
    description: <>Learn about Netdata's many features and capabilities in a guided experienced designed for those new to monitoring and troubleshooting.</>
  },
  {
    label: 'collect-monitor',
    title: 'Collect & monitor',
    description: <>Extract and visualize metrics from essential services or applications on your infrastructure.</>
  },
  {
    label: 'FAQ',
    title: 'FAQ',
    description: <>Frequent Asked Questions</>
  },
  {
    label: 'configure',
    title: 'Configure',
    description: <>Advanced configuration options for those who want to elevate their Netdata Agent-monitored nodes.</>
  },
  {
    label: 'deploy',
    title: 'Deploy',
    description: <>Strategies and playbooks for bootstrapping an infrastructure monitoring solution with Netdata and infrastructure as code tools.</>
  },
  {
    label: 'develop',
    title: 'Develop',
    description: <>Improve Netdata's developer experience through code contributions, developing new data collectors, and more.</>
  },
  {
    label: 'export',
    title: 'Export',
    description: <>Explore Netdata's interoperability with other monitoring and visualization platforms.</>
  },
]


  function Guide ({ title, description, href }) {
    return (
      
      <div className={clsx('col col--4', styles.product)}>
        
  <Card sx={{minHeight: 200,  p: 2, borderRadius: 2 }} elevation={2}>
        <CardActionArea href={href}>
          
  
        <CardContent>
  
      <Typography
        gutterBottom 
        variant="h5" 
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
  
  export default function SecureWorkforceGuides() {
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