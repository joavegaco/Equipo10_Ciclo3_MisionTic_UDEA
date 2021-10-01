import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/BodyRegistrarP.jsx'
import Registro from '../Componentes/Registro/Registro_Producto.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Accordion from '../Componentes/Accordion_Admin/Accordion_Producto.jsx'
import Footer from '../Componentes/Footer/Footer.jsx'


function RegistrarProducto() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Registro/>
            <Filtro_Venta/>
            <Accordion/>
        </Fragment>
    );
}

export default RegistrarProducto