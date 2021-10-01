import React from 'react'
import './Filtro.css'

function Filtro_Venta() {
    return (
      <div className="container-fluid p-2 bg-secondary text-white" id="accordion_search_bar_container">
        <div className="col-xxl-6">
          <div className="input-group mb-3">
            <input type="search" id="accordion_search_bar" className="form-control rounded"
              placeholder="Buscar en la Lista" />
          </div>
        </div>
      </div>
    );
}

export default Filtro_Venta