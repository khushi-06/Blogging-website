import { useState } from "react"; 
// here we have been using react hooks
import styled from "@emotion/styled";
import { Box, TextField, Button, Typography } from "@mui/material";









const Components = styled(Box)`
  width: 500px;
  height: 600px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.4);
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  padding: 75px 65px;
  border: 35px;
`;

const B = styled(Box)`
  position: absolute;
  top: 200px;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 300px;
  & > div,
  & > p,
  & > button {
    margin-top: 19px;
  }
`;

const Loginbutton = styled(Button)`
  text-transform: none;
  background: #e85627;
`;

const Signinbutton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #e85627;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.2);
`;


const Pic = styled("img")({
  width: 50,
});


const signupintialvalue={
  name:'',
  username:'',
  password:''
}



const Login = () => {
  const [account, toggleaccount] = useState("Login");
  const [signup, setSignup] = useState("signupintialvalue");

  const toggleSigup =()=>{
    toggleaccount('signup');
  }

  const toggleLogin =()=>{
    toggleaccount('Login');
  }

  const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name]: [e.target.value]});
    
  }


  return (
    <Components>
      <img className="main-img" src="/img/logo.png" />

      {/* used ternary operator x=y?(yes, execute this) : (else execute this) */}

      {account == "Login" ? (
        <B>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
          <Loginbutton variant="contained">LogIn</Loginbutton>
          <Typography style={{ textAlign: "center" }}>OR</Typography>
          <Signinbutton  onClick={()=>toggleSigup()} >Create Account </Signinbutton>
        </B>


      ) : (
        <B>
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter Name" / >
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter UserName" />
          <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
          <Loginbutton variant="contained">SignUp</Loginbutton>
          <Typography style={{ textAlign: "center" }}>OR</Typography>
          <Signinbutton  onClick={()=>toggleLogin()}>Already Have Account </Signinbutton>
        </B>
      )}
    </Components>
  );
};

export default Login;
