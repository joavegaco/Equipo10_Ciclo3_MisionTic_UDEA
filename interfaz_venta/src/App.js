import React, {Fragment} from 'react';
import ListaPage from './Gestion_Ventas/ListaPage.jsx'
import Registrar from './Gestion_Ventas/RegistrarProducto.jsx'
import ListaV from './Gestion_Ventas/ListaPageVendedor.jsx'
import Footer from './Componentes/Footer/Footer.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Interfaz de Login</h1>
          </Route>
          <Route path="/gestion_ventas" exact>
            <ListaPage></ListaPage>
          </Route>
          <Route path="/agregar_productos" exact>
            <Registrar></Registrar>
          </Route>
          <Route path="/gestion_venta" exact>
            <ListaV></ListaV>
          </Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
