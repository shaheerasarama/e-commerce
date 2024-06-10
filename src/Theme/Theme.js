import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBD96B',
      blackColor: '#000', 
      whiteColor: '#FFF',
      textColor:'#8E8E8E',
      greyColor:'#D9D9D9'
    },
  },
  typography: {
    fontFamily: "Rubik",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        component: "div",
        disableGutters: true,
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          margin: "0px auto",
          padding: "0px",
          width: "95%",
        },
      },
    },
  },
});

export default theme;
