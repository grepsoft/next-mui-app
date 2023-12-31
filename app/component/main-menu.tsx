'use client'

import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import MenuButton from './game-button'
import { Colors } from '../theme/colors'

const MainMenuFrame = styled(Box, {
    name: 'MainMenuFrameComponent',
    slot: "Root"
})(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 8px',
    background: `radial-gradient(circle, rgba(0,0,0,0.2) 10%,
    rgba(0,0,0,1)), url("images/main-menu-bg.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    gap: 4,
    boxShadow: `2px 2px 16px 2px ${Colors.secondary}`
}))

function MainMenu() {
  const [selection, setSelection] = useState<string | undefined>()

  const handleButtonClick = (param: string) => {
    setSelection(param)
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography variant='h3' textTransform='uppercase'>{selection}</Typography>
        <MainMenuFrame>
            <MenuButton title='new game' onButtonClick={handleButtonClick} />
            <MenuButton title='continue' onButtonClick={handleButtonClick} />
            <MenuButton title='options' onButtonClick={handleButtonClick} />
            <MenuButton title='quit' onButtonClick={handleButtonClick} />
        </MainMenuFrame>
    </Box>
  )
}

export default MainMenu