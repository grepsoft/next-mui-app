import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import MainMenu from './component/main-menu'

export default function Home() {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <Box>
        <MainMenu />
      </Box>

    </Container>

      )
}
