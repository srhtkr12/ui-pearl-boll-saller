import React from 'react'
import { Grid, Box } from '@mui/material'
import BigCards from '../components/Cards/BigCards'
import Crousels from '../components/Crousel/Crousels'
import SmallCards from '../components/Cards/SmallCards'
import MediumCards from '../components/Cards/MediumCards'


const Home = () => {
  return (
    <Grid sx={{
      p: 0, m: 0, px: 0.5, pt: 0.5,
      backgroundColor: 'ghostwhite',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Crousels />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <MediumCards />
      </Box>
      <Box>
        <BigCards />
      </Box>
      <Box>
        <SmallCards />
      </Box>
    </Grid>
  )
}

export default Home