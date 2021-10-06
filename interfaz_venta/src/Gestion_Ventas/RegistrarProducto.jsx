import React, {Fragment} from 'react'
import Header from '../Componentes/Header/Header_Admin.jsx'
import Body from '../Componentes/Body/BodyRegistrarP.jsx'
import Filtro_Venta from '../Componentes/Filtro_Venta/Filtro_Venta.jsx'
import Table from '../Componentes/Table/Table_Producto.jsx'

function RegistrarProducto() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Filtro_Venta/>
            <Table/>
        </Fragment>
    );
}

export default RegistrarProducto