import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Vendedor.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Registro_Venta from '../Componentes/Registro/Registro_Venta.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Accordion from '../Componentes/Accordion_Admin/Accordion_Vendedor.jsx'
import Footer from '../Componentes/Footer/Footer.jsx'


function ListaPageVendedor() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Registro_Venta/>
            <Filtro_Venta/>
            <Accordion/>
        </Fragment>
    );
}

export default ListaPageVendedor