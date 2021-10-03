import React, { Fragment } from "react";

function InputEmail(){
  return(
  <Fragment>
    <div className="card-body text-white bg-secondary">  
    <div className="mt-5">
      <div className="container-fluid">  
        <div className="row row-cols-3">
          <div className="col-6 col-xl-4">
            <p width="100%">Atomium es una empresa...</p>
          </div>
          
          <div className="col-12 col-xl-4">
        

            <div className="login">
            
              <h2 className="login-header">¿Olvidó su contraseña?</h2>
            
              <form className="login-container" name="registro">
                <h6>EMAIL</h6>
                <p><input type="texto" name="email" placeholder="Email"/></p>
                <p> <input type="submit" onclick="valida_envia()" value="Recuperar"/> </p>
              </form>
            
            
              <hr style={{backgroundColor: "rgb(255, 255, 255)", margin:"auto"}}/>
              
            </div>

          </div>
          
          
          <div className="col-12 col-6 col-xl-4" style={{backgroundImage: "url('assets/img/ImagologoAtomiumTransparente-01.png')",backgroundRepeat: "no-repeat"}}></div>
        
        </div>
      </div>
    </div>
    </div>
  </Fragment>
  )
}

export default InputEmail;


