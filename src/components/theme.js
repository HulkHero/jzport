import {createTheme} from "@mui/material"
const theme=createTheme({
    palette:{
      primary:{
        main:"#FFFFFF"
        // main:'#C12D24'
      },
      action:{
        hover:"#0097a7"
      }

    },
    colors: {
        base1: " #B90C01", // deep green backgrounf [navbar, about , contact]
        base2: "#FFFFFF  ", //white
        primary: "#D73F36 ", //lighter green
        primary1: "#143438", // deepest green [portfolio, footer]
      }
   

})

export default theme;


// base1: "#1e464a", // deep green backgrounf [navbar, about , contact]
// base2: "#fff", //white
// primary: "#0097a7", //lighter green
// primary1: "#143438", // deepest green [portfolio, footer]