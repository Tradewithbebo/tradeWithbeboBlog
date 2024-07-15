import { Box, GridItem, SimpleGrid,Image } from '@chakra-ui/react'
import React from 'react'

export default function Qrcodeone() {
  return (
    <SimpleGrid columns={ 3 } gap={{ base: 1, md: '30px', lg:'10px' }}>
    <GridItem colSpan={1}>
    <Box boxSize={ {base: 1, md:'180px', lg: '300px' }}>
    <Image
        // boxSize={"16px"}
        objectFit="cover"
        src="/image/Frameone.svg"
        alt="Bebo"
        // mr={"10px"}
      />
    </Box>
    
    </GridItem>
    <GridItem colSpan={1}>
    <Box boxSize={ {base: 1, md:'180px', lg: '300px' }}>
    <Image
        // boxSize={"16px"}
        objectFit="cover"
        src="/image/Frametwo.svg"
        alt="Bebo"
        // mr={"10px"}
      />
    </Box>
   
    </GridItem>
    <GridItem colSpan={1 }>
    <Box  boxSize={ {base: 1, md:'180px', lg: '300px' }}>
    <Image
        // boxSize={"16px"}
        objectFit="cover"
        src="/image/Framethree.svg"
        alt="Bebo"
        // mr={"10px"}
      />
    </Box>
    </GridItem>
  </SimpleGrid>
 
  )
}
