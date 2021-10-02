import React, { Fragment } from "react";
import './AtomiumLogin.css';

function RegisterPage() {

    return (<Fragment>
        
<div className="card-body text-white bg-secondary">
<div className="mt-5 mb-3">
  <div className="container-fluid">  
    <div className="row row-cols-3">
      <div className="col-6 col-xl-4">
        <p width="100%">Atomium es una empresa...</p>
      </div>
      
      <div className="col-12 col-xl-4" style={{margin:"auto"}}>
        
        <form name="registro">
          <div className="login" style={{margin:"auto"}}/> 
            <h2 className="login-header">Registro</h2>
            <div className="form-row">
              <form className="login-container"/>
                <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="texto" placeholder="Email"/>
                    <label for="inputPassword4">Contraseña</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Nombre</label>
                  <input type="texto" name="nombre" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Identificación</label>
                  <input type="texto" name="identificacion" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Dirección domicilio</label>
                  <input type="texto" name="direccion" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                  <label for="inputAddress2">Ciudad</label>
                  <input type="texto" name ="ciudad" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-group">
                  <label for="inputCity" name="celular">Teléfono celular</label>
                  <input type="texto"/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="inputState">Tienda</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">Rol</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="className form-row mt-3"></div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" style={{width: "12px",
                      height: "12px"}}/>
                      <label className="form-check-label" for="gridCheck" style={{height: "12px"}}>
                        Check me out
                      </label>
                    </div>
                  </div>
                </div>
                <div className="className form-row mt-3">
                  <p> <input type="submit" onclick="valida_envia()" value="Registrarse en Atomium" /> </p>
                </div>
            </form>  
          </div>          
        </div>
    </div>
    
      
    
      
    <div className="col-12 col-6 col-xl-4" style={{backgroundImage: "url('assets/img/ImagologoAtomiumTransparente-01.png')",backgroundRepeat:"no-repeat",maxWidth:"33vw"}}>
    </div>
    
    </div>
</div>






    </Fragment>)
}

export default RegisterPage;