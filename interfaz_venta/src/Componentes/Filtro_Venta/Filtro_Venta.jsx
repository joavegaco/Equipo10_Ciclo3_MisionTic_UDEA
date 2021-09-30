import React from 'react'

function Filtro_Venta() {
    return (
      <div class="container-fluid p-2" id="accordion_search_bar_container">
        <div class="col-xxl-6">
          <div class="input-group mb-3">
            <input type="search" id="accordion_search_bar" class="form-control rounded"
              placeholder="Buscar en la Lista" />
          </div>
        </div>
      </div>
    );
}

export default Filtro_Venta