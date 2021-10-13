import React from "react";
import {Link} from 'react-router-dom';
import logotipo from './LogoAtomiumLogotipoBlanco.svg';
import logo from './LogoAtomium-Blanco.svg';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarComponent(props){
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user, isAuthenticated} = useAuth0();

  let title = props.title;
  console.log(props.title);

    return(
    
    <div className="card text-start bg-secondary">
      
      <div className="card-header bg-dark">
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  style={{display:"flex", flexDirection:"row"}}>
            
            <div className="col-12 col-6 col-xl-4" margin="auto">
              <div className="container-fluid" >
                <Link to="/auth" className="navbar-brand">
                <img src={logo} alt=" " height="75"/>
          
                {title}</Link>
              </div>
            </div>

            <div className="col-12 col-6 col-xl-4">
              <div className="container-fluid">
                  <img src={logotipo} alt="" width="100%"/>
              </div>
            </div>

            <div className="col-12 col-6 col-xl-4">
              <div className="container-fluid">
                <form class="form-inline">
                  <div className="bienvenida">{isAuthenticated ? user.name: "Bienvenido"}</div> 
                </form> 
              <div className="row row-cols-2">
                <div className="col-6">
                  {!isAuthenticated? <Link className="ingreso" onClick={() => loginWithRedirect()}>Log In</Link>:null}
                </div>
                <div className="col-6">
                  {isAuthenticated?<Link  className="ingreso" onClick={() => logout({ returnTo: window.location.origin })} >Log Out</Link>
                  :null}
                </div>
              </div>
              </div>
            </div>
        </nav>
      </div>
    
          
      </div>)
    };

export default NavbarComponent;