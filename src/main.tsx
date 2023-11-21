import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#E1306C",
        },
        secondary: {
            main: "#405DE6"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#b9b9b9"
        },
        background: {
            default: "#020202",
            paper: "#131313"
        },
        divider: "gray",
        mode: "dark"
    },

});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </>
)
