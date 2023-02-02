import * as React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Box, Link } from '@mui/material';
import styles from './Homepage.module.css';



import { useTheme } from '@mui/material/styles';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HomepageAbout() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const handleClick = () => {
    setOpen(!open);
  };
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.homepageSection)}>
    <Container sx={{ alignItems: 'center', padding: 6 }}>
    <Box
      bgcolor={'alternate.main'}
      padding={{ xs: 2, md: 4, p: 4 }}
      borderRadius={2}
      
    >
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

<div className="container">
    <Typography
      variant="h3"
      component={'p'}
      align="center" 
      gutterBottom={true}
      sx={{
        fontWeight: 500,
        fontFamily: 'Overpass',
      }} 
    >About</Typography>
</div>
<div className="container">
<Typography variant="h5" align="center" paragraph={true} gutterBottom={true} sx={{
        fontWeight: 300,
        fontFamily: 'Overpass',

      }} >Beyond Identity helps customers deploy the strongest authentication primitives on the planet, eliminating shared secrets for customers at registration, login, and recovery, as well as from your database. Unique to Beyond Identity, users never have to pick up a second device to enroll or perform multi-factor authentication, passwords are never used on user flows. They can be removed from your database, and you can implement risk-based access controls using granular user and device risk captured in real-time. Backed by a cloud-native architecture, our platform was built for enterprise workloads.</Typography>
</div>
    



</Grid>
</Box>
  </Container>
  </div>
  );
}

