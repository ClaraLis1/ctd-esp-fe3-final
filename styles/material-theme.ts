import {createTheme} from "@mui/material";
import { lime, purple } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
       
    },
    palette: {
        primary: {
            main: '#ed1d24',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
    }
});
