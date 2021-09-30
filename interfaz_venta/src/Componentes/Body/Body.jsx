import React from 'react'

function Body() {
    return (
        <div class="container-fluid">
            <div class="description">
                <h1>Lista de Ventas</h1>
            </div>
            <div class="row row-cols-2">
                <div class="col-xxl-6">
                    Buscar Producto
                    <div class="input-group mb-1">
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="col-xxl-6">
                    Seleccionados
                    <div class="input-group mb-1">
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="col-xxl-6">
                    Fecha Inicial
                    <input type="date" class="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
                    min="{{ $min->time }}"/>
                </div>
                <div class="col-xxl-6">Fecha del Pago
                    <input type="date" class="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
                    min="{{ $min->time }}"/>
                </div>
                <div class="col-xxl-6">
                    Vendedor
                    <div class="input-group mb-1">
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="col-xxl-6">
                    Mercado
                    <select class="form-select mb-1">
                    <option selected>Tienda Virtual</option>
                    <option value="2">Tienda Física</option>
                    </select>
                </div>
                <div class="col-xxl-6">
                    Documento Del Cliente
                    <div class="input-group mb-1">
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="col-xxl-6">
                    Nombre Del Cliente
                    <div class="input-group mb-1">
                    <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="col-xxl-6">
                    Estado
                    <select class="form-select mb-1">
                    <option selected>En Creación</option>
                    <option value="2">En Embalaje</option>
                    <option value="3">En Despacho</option>
                    <option value="4">En Ruta</option>
                    <option value="5">Recibido</option>
                    </select>
                </div>
                <div class="col-xxl-6">
                    Total Venta
                    <div class="input-group mb-1">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body