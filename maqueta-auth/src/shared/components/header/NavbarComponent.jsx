import React from "react";
import {Link} from 'react-router-dom';
function NavbarComponent(props){


  let title = props.title;
  console.log(props.title);

    return(
    <div>
    
    <div className="card text-start bg-secondary">
      
      <div className="card-header bg-dark">
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg"  style={{display:"flex", flexDirection:"row"}}/ >
            
            <div className="col-12 col-6 col-xl-4">
              <div className="container-fluid">
                <Link to="/login" className="navbar-brand">
                <img src="assets/img/LogoAtomiumBlanco.png" alt=" " height="75"/>
                
                {title}</Link>
              </div>
            </div>

            <div className="col-12 col-6 col-xl-4">
              <div className="container-fluid">
                  <img src="assets\img\LogoAtomiumLogotipoBlanco.svg" alt="" width="100%"/>
              </div>
            </div>

            <div className="col-6 col-xl-4">
              <div className="container-fluid">
                  
              </div>
            </div>
  
      </div>
    </div>
          
      </div>)
    };

export default NavbarComponent;