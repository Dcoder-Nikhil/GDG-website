import { Box } from '@mui/material'
import React from 'react'
import HeroHome from '../Components/Home/HeroHome'
import CommunityHero from '../Components/Home/CommunityHero'
import WhatHero from '../Components/Home/WhatHero'

const Home = () => {
  return (
    <Box>
      <HeroHome />
      <CommunityHero />
      <WhatHero />
    </Box>
  )
}

export default Home