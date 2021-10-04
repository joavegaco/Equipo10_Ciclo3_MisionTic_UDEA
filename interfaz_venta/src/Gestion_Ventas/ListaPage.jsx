import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Accordion from '../Componentes/Accordion/Accordion_Admin.jsx'



function ListaPage() {
    return (
        <Fragment>
            <Header/>
            <Body/>         
            <Filtro_Venta/>
            <Accordion/>
        </Fragment>
    );
}

export default ListaPage