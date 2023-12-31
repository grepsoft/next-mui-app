import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from './colors';

const roboto = Roboto({
    weight: ['300','400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

declare module '@mui/material/styles' {
    interface Components {
        MainMenuFrameComponent: {},
        GameButtonComponent: {}
    }
}

export const theme = createTheme({
    palette: {
        mode: 'dark'
    },
    typography: {
        fontFamily: roboto.style.fontFamily
    },

    components: {
        MainMenuFrameComponent: {
            styleOverrides: {
                root: {
                    width: 250,
                    height: 400,
                    border: `12px ${Colors.primary}`,
                    borderStyle: 'ridge solid',
                    borderRadius: '36px',
                }
            }
        },
        GameButtonComponent: {
            styleOverrides: {
                root: {
                    width: 200,
                    height: 40,
                    borderTop: `1px solid ${Colors.lime_green}`,
                    borderLeft: `1px solid ${Colors.lime_green}`,
                    background: Colors.secondary,
                    clipPath: `polygon(
                        4% 0,
                        100% 0,
                        100% 80%,
                        94% 100%,
                        0 100%,
                        0 20%
                    )`,
                    '&:hover': {
                        border: 'none',
                        background: Colors.primary
                    }
                }
            }
        }
    }
})