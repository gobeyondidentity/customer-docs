import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Box, Link } from '@mui/material';
import CommunityImage from '@site/static/img/communityBanner.svg';


import { useTheme } from '@mui/material/styles';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function HomepageCommunity() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const handleClick = () => {
    setOpen(!open);
  };
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  return (

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
    >Community</Typography>
</div>
<div className="container">
<Typography variant="h5" align="center" paragraph={true} gutterBottom={true} sx={{
        fontWeight: 500,
        fontFamily: 'Overpass',
      }} ><Link onClick={handleClick} href="https://support.beyondidentity.com/hc/en-us/community/topics">Join the conversation</Link></Typography>
</div>
    

  <CommunityImage />

</Grid>
</Box>
  </Container>
  );
}

