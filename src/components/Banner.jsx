import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import banner from "../assets/Wallpaper.jpg"
import banner1 from "../assets/Rectangle 191wm2.png"
import banner2 from "../assets/Rectangle 192wm1.png"
import banner3 from "../assets/Rectangle 195wm3.png"

const Banner = () => {
  return (
    <Box
      position="relative"
    >
      <Image src={banner} w="100%" />
      <Image src={banner1} w="100%" position="absolute" bottom='-56'/>
      <Image src={banner3} w="100%" position="absolute" bottom='-72'/>
      <Image src={banner2} w="100%" position="absolute" bottom='-52' />
      
    </Box>
  );
}

export default Banner