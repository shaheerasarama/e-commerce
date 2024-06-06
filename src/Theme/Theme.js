import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:'#EBD96B',
            blackColor:'#000'
        }
    },
    components:{
        MuiContainer:{
            defaultProps:{

            },
            styleOverrides:{
                root:{
                    // margin:'20px',
                    // padding:'20px',
                    // margin:'auto',
                    // backgroundColor:'red'
                }
            }
        },
    }
});
export default theme;