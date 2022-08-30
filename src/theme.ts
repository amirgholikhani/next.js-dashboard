import { createTheme } from '@mui/material/styles'
import palette from '@/styles/theme.module.scss'

// Create a theme instance.
const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '9px 15px',
        },
        contained: {
          borderRadius: '8px',
          boxShadow: 'none',
        },
        outlined: {
          borderRadius: '8px',
          boxShadow: 'none',
          padding: '9px 15px',
          color: '#292f39',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: 'white',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '11px 14px 12px 14px !important',
          fontSize: '16px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          textAlign: 'center',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          transform: 'translate(14px, -9px) scale(.75) !important',
          top: '0 !important',
          left: '0 !important',
        },
        outlined: {
          transform: 'translate(-50%, -50%) scale(1)',
          top: '50%',
          left: '50%',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: 'white',
          borderRadius: '8px',
          border: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderRadius: '8px', // root border color
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderRadius: '8px', // root border color
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderRadius: '8px', // disabled border color
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '18px',
        },
      },
    },
  },
  palette: {
    primary: {
      light: palette.primaryLight,
      main: palette.primary,
      contrastText: 'white',
      dark: '#0069d9',
    },
    secondary: {
      main: palette.secondary,
      contrastText: 'white',
    },
    error: {
      main: palette.error,
    },
    success: {
      main: palette.success,
    },
  },
  typography: {
    fontFamily: [
      '"IRANSans"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
})

export default theme
