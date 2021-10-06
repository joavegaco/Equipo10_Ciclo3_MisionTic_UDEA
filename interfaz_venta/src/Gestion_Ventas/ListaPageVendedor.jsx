import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Vendedor.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Table from '../Componentes/Table/Table_Vendedor.jsx'


function ListaPageVendedor() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Filtro_Venta/>
            <Table/>
        </Fragment>
    );
}

export default ListaPageVendedor