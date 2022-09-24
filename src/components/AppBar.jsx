import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {styled} from '@mui/material'
import theme from './theme';
import { HashLink } from 'react-router-hash-link';

const FAppBar= styled(AppBar)(({theme})=>({
  //  backgroundColor:theme.colors.base1,
  //  color:theme.colors.base2,
  background: `linear-gradient(to left, #C12D24,black )`,


}))

export default function NavAppBar() {

 
  return (
 
      <FAppBar position="fixed">
        <Toolbar sx={{
            display: 'flex',
            flexFlow:"row wrap",
            justifyContent: 'space-between',

        }}>
          <Typography variant="h5" sx={{color:"white"}} component="h6">
            {" Aas Enterprise "}
          </Typography>
          <Box>
            <Box >
            {/* <Button  sx={{ color:"#fff",width:"50px" }} ><a target="_blank" sx={{color:"#fff",textDecoration:"none"}} href="https://github.com/HulkHero"><GitHubIcon sx={{color:"#fff",mt:"5px"}}/></a></Button> */}
               
               <HashLink style={{textDecoration:'none'}} smooth to="#contact"> <Button sx={{ color:"#fff" }}>Contact</Button></HashLink>
            

             </Box>
             {/* <Box sx={{display:{xs:"block",sm:"none"}}}>
              <Button onClick={()=>{setDrawer(!drawer)}} sx={{ color:"#fff",width:"50px" }} ><MenuRoundedIcon></MenuRoundedIcon></Button>
              <Drawer 
            anchor="left"
            open={drawer}
            onClose={()=>{setDrawer(false)}}
            onOpen={()=>(setDrawer(true))}
          >
            <Grid container  sx={{Width:"50%",height:"100%", Display:"flex",flexDirection:"column", backgroundColor:`${theme.colors.base1}`}} >
            <Button  sx={{ color:"#fff",width:"50px" }} ><a target="_blank" sx={{alignSelf:"center", color:"#fff",textDecoration:"none"}} href="https://github.com/HulkHero"><GitHubIcon sx={{color:"#fff",mt:"5px"}}/></a></Button>
               <HashLink  style={{textDecoration:'none'}} smooth to="#about"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>About</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#portfolio"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>Portfolio</Button></HashLink>
               <HashLink style={{textDecoration:'none'}} smooth to="#contact"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Contact</Button></HashLink> */}

            </Box>
        </Toolbar>
      </FAppBar>
  
  );
}