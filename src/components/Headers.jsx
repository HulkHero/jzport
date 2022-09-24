import { Box, Typography} from "@mui/material"
import { useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";
import Image from "../images/banner.PNG"
import NavAppBar from "./AppBar";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Typed from "react-typed"
const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '90vh',
    height:"auto",
    background: `linear-gradient(to left, rgb(207, 66, 53,0.5) ,black),url(${Image})`,
    backgroundSize:"cover",
    backgroundRepeat: 'no-repeat',
  }));
const HeaderContainer=styled(Box)(({ theme })=>({
  width: '80%',
  minHeight: '90vh',
  height:"auto",
  padding:"20px",
  display: 'flex',
  flexFlow:'column wrap',
  fontFamily:"roboto",
 // alignItems: 'center',
  justifyContent: 'center',
}))
const Decorator=styled(Box)(({ theme })=>({
  display: "flex",
  fontWeight: "bolder",
  fontFamily: "roboto",
  position: "relative",
  marginTop: "20px",
  ":before": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.colors.primary,
    content: '""',
    borderRadius: "50%",
}}
))
const Arrow=styled(Typography)(({ theme })=>({
 position: "absolute",
 color:theme.colors.base2,
 
 
 lineHeight: "50px",
 animationName: "arrow",
 animationDuration:"0.7s",
 animationIterationCount: "infinite",

 "@keyframes arrow":{
  "0%": {
    transform: "scale(1,1)",
    paddingTop: "0px",
  },
  "100%": {
    transform: "scale(1,2)",
    paddingTop: "11px",
  },

 }
}
))
const Header=()=>{
   const theme=useTheme()
    return(
        <>  
        
        <HeaderWrapper>
        <NavAppBar/>
        <HeaderContainer>
          <Typography variant="h3" color="#fff" component="h4" sx={{maxHeight:"200px" ,fontSize:{xs:"1.5rem",sm:"2.5rem"},}}>We Provide {" "} 
          {/* <Typed
                strings={[
                    'Programmer',
                    'Web Developer',
                    'C++ Expert',
                     "Desktop App Dev",
                      ]}
                    typeSpeed={40}
                    backSpeed={50}
                  
                    loop /> */}
        </Typography>
          <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1.5rem",sm:"2.5rem"},margin: theme.spacing(1, 0),}}>All Types of </Typography>
         <Typography variant="h3" color="red" component="h4" sx={{fontSize:{xs:"2rem",sm:"3rem"},margin: theme.spacing(1, 0),}}>Gloves</Typography>
          <Decorator>
          <Typography variant="h3" color="#fff" component="h4" sx={{fontSize:{xs:"1rem",sm:"1.3rem"},lineHeight:"40px",position:"absolute",left:"20px"}}>Order Now</Typography>
          
          <Arrow variant="span" sx={{left:{xs:"6rem",sm:"7.3rem"},}}>
            <ArrowDownwardRoundedIcon></ArrowDownwardRoundedIcon>
          </Arrow>
          </Decorator>
        </HeaderContainer>
        </HeaderWrapper>

        </>
    )
}
export default Header;