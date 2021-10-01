import React from 'react'
import './Body.css'

function BodyRegistrarP() {
    return (
        <div className="container-fluid bg-secondary text-white">
            <div className="description">
                <h1>Agregar Productos</h1>
            </div>
            <div className="row row-cols-3">
                <div className="col-xxl-4">
                    Código
                    <div className="input-group mb-1">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-4">
                    Producto
                    <div className="input-group mb-1">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-xxl-4">
                    Precio
                    <div className="input-group mb-1">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyRegistrarP