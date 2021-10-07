import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/BodyRegistrarP.jsx'
import Table from '../Componentes/Table/Table_Producto.jsx'

function RegistrarProducto() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Table/>
        </Fragment>
    );
}

export default RegistrarProducto