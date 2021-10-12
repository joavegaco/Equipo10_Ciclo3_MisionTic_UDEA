import React, { Fragment, useState, useEffect } from "react";
const googleClientId =  '739859321693-h1pom8r8fb1391d3afoa6vlccvho2j60.apps.googleusercontent.com';// process.env.REACT_APP_GOOGLE_CLIENT_ID;

const loadGoogleScript = () => {
  
  //loads the Google JavaScript Library
  (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
      
      //we have at least one script (React)
      const firstJs = document.getElementsByTagName('script')[0];
      
      //prevent script from loading twice
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script'); 
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad; 
      firstJs.parentNode.insertBefore(js, firstJs);
  }());    
  
}

function LoginPage() {

  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
  
  const onSuccess = (googleUser) => {
    debugger;
    console.log('result from google', googleUser);

    if(googleUser.it.Tt !== undefined){
      setIsLoggedIn(true);
      const profile = googleUser.getBasicProfile();
      setName(profile.getName());
      setEmail(profile.getEmail());
      setImageUrl(profile.getImageUrl());
    }
  };
  
  const onFailure = () => {
    setIsLoggedIn(false);
  }
  
  const logOut = () => {
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };
  
  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure,
    });
  }
  
  
  useEffect(() => {
    
    //window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
     
      const _gapi = window.gapi;
      setGapi(_gapi);
      
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
    
    //ensure everything is set before loading the script
    loadGoogleScript();
    
  }, []);

  const [nemail,setNemail]= useState("");
  const [password,setPassword]= useState("");

    return (
    <Fragment>
        <div className="card-body text-white bg-secondary">
          <div className="mt-5">
            <div className="container-fluid">  
              <div className="row row-cols-3">
                <div className="col-6 col-xl-4">
                  <p style={{width:"100%"}}>Atomium es una empresa...</p>
                </div>
                
                <div className="col-12 col-xl-4" style={{margin:"auto"}}>
                  

                  <div className="login">
                  
                    <h2 className="login-header">Bienvenido</h2>
                  
                    <form className="login-container">
                      <h6>EMAIL</h6>
                      <p><input type="nemail" placeholder="Email" onChange={(data) => setNemail(data.target.value)}/></p>
                      <h6>CONTRASEÑA</h6>
                      <p><input type="password" placeholder="Password" onChange={(data) => setPassword(data.target.value)}/></p>
                      <p> <input type="submit" value="Entrar"/> </p>
                    </form>
                    <div>
                      {!isLoggedIn &&
                        <div id="google-signin"></div>
                      }
                      
                      {isLoggedIn &&
                        <div>
                          <div>
                            <img src={imageUrl} alt='' />
                          </div>
                          <div>{name}</div>
                          <div>{email}</div>
                          <button className='btn-primary' onClick={logOut}>Log Out</button>
                        </div>
                      }
                    </div>
                    <hr style={{backgroundColor:"rgb(255, 255, 255)",margin:"auto"}}/>
                  
                    <div className="mt-3 mb-3">
                      <h6 style={{margin:"auto"}}>Acceda a sus funciones como vendedor, administrador, ejecutivo, operario, director o gerente comercial</h6>
                      <a style={{margin:"auto", color:"rgb(0, 137, 250)"}} href='https://www.w3schools.com/'>Regístrese aquí</a><br/>
                      <a style={{margin:"auto", color:"rgb(0, 137, 250)"}} href='https://www.w3schools.com/'>Olvidó su contraseña</a>
                      <div className="mt-3"><hr style={{backgroundColor: "rgb(255, 255, 255)", margin:"auto"}} /></div>
                    </div>
                  </div>
                  
                </div>
                
                
                <div className="col-12 col-6 col-xl-4" style={{backgroundImage:" url('assets/img/ImagologoAtomiumTransparente-01.png')",backgroundRepeat: "no-repeat"}}></div>
              
              </div>
            </div>
          </div>
          </div>
    </Fragment>);
}

export default LoginPage;