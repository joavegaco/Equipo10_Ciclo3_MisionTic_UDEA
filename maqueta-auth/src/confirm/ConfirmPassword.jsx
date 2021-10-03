import React, { Fragment } from "react";

function ConfirmPassword(){
    return(
        <Fragment>
            <div className="card-body text-white bg-secondary">
  <div className="mt-5">
    <div className="container-fluid" style={{margin:"auto"}}>  
      <div className="row row-cols-3" >
        <div className="col-6 col-xl-4">
          <p width="100%">Atomium es una empresa...</p>
        </div>
        
        <div className="col-12 col-xl-4">
        

          <div className="login">
          
            <h2 className="login-header">Renueve su contraseña</h2>
          
            <form className="login-container" name="registro">
              <h6>Introduzca nueva contraseña</h6>
              <p><input type="password" name ="contrasenya" placeholder="Password"/></p>
              <h6>Confirme nueva contraseña</h6>
              <p><input type="password" name="confirmarcontrasenya" placeholder="Password"/></p>
              <p> <input type="submit" value="Entrar" onclick="valida_envia()"/> </p>
            </form>
          
          
            <hr style={{backgroundColor: "rgb(255, 255, 255)", margin:"auto"}}/>
            
          </div>
          
        </div>
        
        
        <div className="col-12 col-6 col-xl-4" style={{backgroundImage: "url('./src/assets/img/ImagologoAtomiumTransparente-01.png')",backgroundRepeat: "no-repeat"}}></div>
        
      </div>
    </div>
  </div>
  </div>
        </Fragment>
    )
};

export default ConfirmPassword;