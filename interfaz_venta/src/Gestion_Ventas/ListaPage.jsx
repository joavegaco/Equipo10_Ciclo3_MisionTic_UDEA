import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/Body.jsx'
import Table from '../Componentes/Table/Table_Admin.jsx'



function ListaPage() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Table/>
        </Fragment>
    );
}

export default ListaPage