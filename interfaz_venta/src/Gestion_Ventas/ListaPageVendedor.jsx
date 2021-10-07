import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Vendedor.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Table from '../Componentes/Table/Table_Vendedor.jsx'


function ListaPageVendedor() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Table/>
        </Fragment>
    );
}

export default ListaPageVendedor