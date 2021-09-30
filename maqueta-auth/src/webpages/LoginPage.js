import React, { Fragment } from "react";
import NavbarComponent from "../shared/components/header/NavbarComponent";

function LoginPage() {

    return (
    <Fragment>
        <NavbarComponent />
        <div class="card-body text-white bg-secondary">
  <div class="mt-5">
    <div class="container-fluid">  
      <div class="row row-cols-3">
        <div class="col-6 col-xl-4">
          <param style="width:100%">Atomium es una empresa...</param>
        </div>
        
        <div class="col-12 col-xl-4" style="margin:auto">
          /*Arranca login*/

          <div class="login">
          
            <h2 class="login-header">Bienvenido</h2>
          
            <form class="login-container">
              <h6>EMAIL</h6>
              <p><input type="texto" placeholder="Email"/></p>
              <h6>CONTRASEÑA</h6>
              <p><input type="password" placeholder="Password"/></p>
              <p> <input type="submit" value="Entrar"/> </p>
            </form>
            <hr style="background-color: rgb(255, 255, 255);margin:auto"/>
            /*Cierra login*/

            /*Arranca instrucción*/
            <div class="mt-3 mb-3">
              <h6 style="margin:auto">Acceda a sus funciones como vendedor, administrador, ejecutivo, operario, director o gerente comercial</h6>
              <a style="margin:auto; color:rgb(0, 137, 250);" href='https://www.w3schools.com/'>Regístrese aquí</a><br/>
              <a style="margin:auto; color:rgb(0, 137, 250);" href='https://www.w3schools.com/'>Olvidó su contraseña</a>
              <div class="mt-3"><hr style="background-color: rgb(255, 255, 255); margin:auto"/></div>
            </div>
          </div>
          /*Cierra columna*/
        </div>
        
        /*Abre columna logo*/
        <div class="col-12 col-6 col-xl-4" style="background-image: url('assets/img/ImagologoAtomiumTransparente-01.png');background-repeat: no-repeat;"></div>
        /*Cierra columna logo*/
      </div>
    </div>
  </div>
  </div>
    </Fragment>);
}

export default LoginPage;