import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Table from '../Componentes/Table/Table_Admin.jsx'



function ListaPage() {
    return (
        <Fragment>
            <Header/>
            <Body/>         
            <Filtro_Venta/>
            <Table/>
        </Fragment>
    );
}

export default ListaPage