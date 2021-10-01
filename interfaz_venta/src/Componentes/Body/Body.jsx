import React from 'react'
import './Body.css'

function Body() {
    return (
        <div className="container-fluid bg-secondary text-white">
            <div className="description">
                <h1>Lista de Ventas</h1>
            </div>
            <div className="row row-cols-2">
                <div className="col-xxl-6">
                    Buscar Producto
                    <div className="input-group mb-1">
                    <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-6">
                    Seleccionados
                    <div className="input-group mb-1">
                    <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-6">
                    Fecha Inicial
                    <input type="date" className="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
                    min="{{ $min->time }}"/>
                </div>
                <div className="col-xxl-6">Fecha del Pago
                    <input type="date" className="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
                    min="{{ $min->time }}"/>
                </div>
                <div className="col-xxl-6">
                    Vendedor
                    <div className="input-group mb-1">
                    <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-6">
                    Mercado
                    <select className="form-select mb-1">
                    <option selected>Tienda Virtual</option>
                    <option value="2">Tienda Física</option>
                    </select>
                </div>
                <div className="col-xxl-6">
                    Documento Del Cliente
                    <div className="input-group mb-1">
                    <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-6">
                    Nombre Del Cliente
                    <div className="input-group mb-1">
                    <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-6">
                    Estado
                    <select className="form-select mb-1">
                    <option selected>En Creación</option>
                    <option value="2">En Embalaje</option>
                    <option value="3">En Despacho</option>
                    <option value="4">En Ruta</option>
                    <option value="5">Recibido</option>
                    </select>
                </div>
                <div className="col-xxl-6">
                    Total Venta
                    <div className="input-group mb-1">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body