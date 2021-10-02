import React, { Fragment, useState } from "react";


function LoginPage() {

  const [email,setEmail]= useState("");
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
                      <p><input type="email" placeholder="Email" onChange={(data) => setEmail(data.target.value)}/></p>
                      <h6>CONTRASEÑA</h6>
                      <p><input type="password" placeholder="Password" onChange={(data) => setPassword(data.target.value)}/></p>
                      <p> <input type="submit" value="Entrar"/> </p>
                    </form>
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