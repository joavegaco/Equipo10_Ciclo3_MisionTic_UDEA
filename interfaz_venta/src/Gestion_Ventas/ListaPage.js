import React, {Fragment} from 'react'
import Header_Admin from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Registro_Venta from '../Componentes/Registro_Venta/Registro_Venta.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Accordion_Admin from '../Componentes/Accordion_Admin/Accordion_Admin.jsx'
import Footer from '../Componentes/Footer/Footer.jsx'


function ListaPage() {
    return (
        <Fragment>
            <Header_Admin/>
            <Body/>
            <Registro_Venta/>
            <Filtro_Venta/>
            <Accordion_Admin/>
            <Footer/>
        </Fragment>
    );
}

export default ListaPage