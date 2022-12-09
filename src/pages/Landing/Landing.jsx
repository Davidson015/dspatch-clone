import React from 'react';

// Material imports
import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';

// Assets
import theme from '../../assets/theme';
import { AppStore, PhoneMockup, PlayStore } from '../../assets';

import { Button } from '../../components';

import useStyles from './styles';

const Landing = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box component='main' className={classes.wrapper} mt={3}>
        <Box className={classes.jumbotron}>
          <Container sx={{
            mx: { md: 5 },
            pt: { xs: 3, md: 0 }
          }}>
            <Grid container direction={{ xs: 'column', md: 'row' }}>
              <Grid xs>
                <Typography variant='h3' color='#ffffff' mb={1.5}>
                  The quick, inexpensive platform to travel your goods
                </Typography>
                <Typography variant='body1' color='#ffffff' mb={{ xs: 3, mb: 0 }}>
                DSptach is a platform to transport goods and services from anywhere in Nigeria. With our quality drivers registered to the platform, your goods are in safe hands.
                </Typography>
              </Grid>
              <Grid xs md={4.5}>
                <img className={classes.phoneMockup} src={PhoneMockup} alt='Phone Mock-up' />
              </Grid>
            </Grid>

            
            <Typography variant='body1' color='#ffffff' mb={1}>
              Download the DSpatch app
            </Typography>

            <Stack direction='row' spacing={{ xs: 4, md: 8 }}>
              <img className={classes.store} src={AppStore} alt='Install from Apple App Store' />
              <img className={classes.store} src={PlayStore} alt='Install from Google Play Store' />
            </Stack>
          </Container>
        </Box>

        <Box className={classes.miniJumbo}>
          <Box sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .5)',
            minHeight: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Container sx={{
              py: 5,
              
            }}>
              <Grid container direction={{ xs: 'column', md: 'row' }}>
                <Grid xs>
                  <Typography variant='h4' color='#ffffff' mb={1}>
                    Become a DSpatcher and get paid
                  </Typography>
                  <Typography variant='subtitle2' color='#ffffff'>
                    Drive on the platform with the most active rider network.
                  </Typography>
                  <Typography variant='subtitle2' color='#ffffff' mb={{ xs: 3, md: 0 }}>
                    Be your own boss and choose your own schedule.
                  </Typography>
                </Grid>
                <Grid xs sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'end'},
                  alignItems: 'center',
                }}>
                  <Button size='small' sx={{
                    borderRadius: '30px',
                    backgroundColor: '#ffffff',
                    color: '#092C4C',
                    height: 'fit-content',

                    '&:hover': {
                      backgroundColor: '#E9E9E9',
                    }
                  }}>
                    Sign Up to DSpatch
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Landing