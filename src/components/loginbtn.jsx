import React from "react";
import {GoogleLogin} from "react-google-login";
const clientId = "951487084376-n5c48d1ep4tqdsgd4pg44pse3aul0ofl.apps.googleusercontent.com"




function LoginBtn() {
  const onSuccess =(res)=>{
  console.log('[Login Sucess] CurrentUser :',res)
  }
  const onFailure =(res)=>{
    console.log('[Login Failed] CurrentUser :',res)
    }
  return (
    <>
      <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
      </div>
    </>
  );
}

export default LoginBtn;
