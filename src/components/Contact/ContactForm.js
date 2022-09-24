import React, { useState ,useRef} from 'react'
import { Button, TextField,Grid } from '@mui/material'
import theme from '../theme' 
import emailjs from '@emailjs/browser';

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
    emailjs.sendForm('service_v998a9x', 'template_o6lkv6s',form.current, 'keF1nJlnn208nArdw')
      .then((result) => {
          console.log(result.text);
          setText("sent")
          form.reset();
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
   
     <form ref={form} onSubmit={sendEmail}>
      <Grid container justifyContent="center"  sx={{width:"90%"}} flexDirection={"column"} >
    <TextField type="name" value={user.name} name="name" id="outlined-basic"  onChange={handleChange}  label="Name" variant="outlined"  sx={{alignSelf:"center",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}} />     
    <TextField type="email" value={user.email} name="email" id="outlined-basic" onChange={handleChange} sx={{alignSelf:"center",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}}  label="Email" variant="outlined" />
    <TextField type="messege" value={user.messege} label="Details" name="messege" id="outlined-basic" onChange={handleChange} multiline={true} sx={{alignSelf:"center",maxWidth:"600px",mb:'10px',input :{color:`${theme.colors.base2}`,borderColor:`${theme.colors.base2}`,}}} variant="outlined" />
    <Button type="submit" variant="contained" value="Send" sx={{alignSelf:"center",width:"50px",bgcolor:"#D73F36",color:"#fffff"}}>{text}</Button>
    </Grid>
    </form>
    
  )
}

export default ContactForm