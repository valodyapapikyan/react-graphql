import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: '#FF5500',
            dark: '#E63C00',
            light: '#FF6F1A',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#035E86',
            dark: '#00456D',
            light: '#1D78A0',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Gotham',
            'Roboto',
            'sans-serif',
        ],
        h1: {
            fontSize: '3rem'
        }
    },
});
