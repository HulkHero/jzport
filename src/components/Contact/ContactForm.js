import React, { useState ,useRef} from 'react'
import { Button, TextField,Grid } from '@mui/material'
import theme from '../theme' 
import emailjs from '@emailjs/browser';
import {styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  maxWidth:"600px",
   ".MuiFormLabel-root":{
    textColor:"white",
    color:"white",
   },

   "& .MuiInputBase-input":{
    color:"white",
   },

  '& label.Mui-focused': {
    color: 'white',
   
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D73F36',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
     
    },
  },
});

const ContactForm = () => {
  const form = useRef();
  const [text, setText] = useState(
  
  "Send");
  const [user, setUser] = useState({
    name:"",
    email:"",
    messege:""
  });
  const handleChange = (e) => {
    setUser((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("user",user)
  console.log(form.current)
    emailjs.sendForm('service_dmroshi', 'template_u138ixn',form.current, 'nkEh-MOeJodOffXpQ')
      .then((result) => {
          console.log(result.text);
          setText("sent")
          form.reset();
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
     
  };
  return (
   
     <form ref={form} onSubmit={sendEmail}>
      <Grid container justifyContent="center"  sx={{width:"90%"}} flexDirection={"column"} >
    <CssTextField type="name" value={user.name} name="name" id="outlined-basic"  onChange={handleChange}  label="Name" variant="outlined"  sx={{alignSelf:"center",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}} />     
    <CssTextField type="email" value={user.email} name="email" id="outlined-basic" onChange={handleChange} sx={{alignSelf:"center",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}}  label="Email" variant="outlined" />
    <CssTextField type="messege" value={user.messege} label="Details" name="messege" id="outlined-basic" onChange={handleChange} multiline={true} sx={{alignSelf:"center",minWidth:"210px",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}} variant="outlined" />
   
    <Button type="submit" variant="contained" value="Send" sx={{alignSelf:"center",width:"50px",bgcolor:"#D73F36",color:"#fffff"}}>{text}</Button>
    </Grid>
    </form>
    
  )
}

export default ContactForm