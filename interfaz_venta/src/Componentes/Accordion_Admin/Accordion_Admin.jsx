import React from 'react'

function Accordion_Admin() {
    return (
      <div class="accordion p-2" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button accordion-button-dark" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h6>ID</h6>
                    <p>1</p>
                  </div>
                  <div class="col">
                    <h6>Documento Del Cliente</h6>
                    <p>15164654</p>
                  </div>
                  <div class="col">
                    <h6>Nombre Del Cliente</h6>
                    <p>Lorenzo Perez</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body text-dark">
              <div class="container">
                <div class="row g-2">
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Creada por: </strong><a>Vendedor1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Inicio: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Producto: </strong><a>Camiseta Polo 1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Pago: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Mercado: </strong><a>Tienda Virtual</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Estado: </strong><a>Recibido</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Total Venta: </strong><a>$ Valor</a></div>
                  </div>
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                <button type="button" class="btn btn-dark">Modificar Venta</button>
                <button type="button" class="btn btn-danger">Eliminar Venta</button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h6>ID</h6>
                    <p>2</p>
                  </div>
                  <div class="col">
                    <h6>Documento Del Cliente</h6>
                    <p>9654654</p>
                  </div>
                  <div class="col">
                    <h6>Nombre Del Cliente</h6>
                    <p>Claudia Tamayo</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body text-dark">
              <div class="container">
                <div class="row g-2">
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Creada por: </strong><a>Vendedor1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Inicio: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Producto: </strong><a>Camiseta Polo 1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Pago: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Mercado: </strong><a>Tienda Virtual</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Estado: </strong><a>Recibido</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Total Venta: </strong><a>$ Valor</a></div>
                  </div>
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                <button type="button" class="btn btn-dark">Modificar Venta</button>
                <button type="button" class="btn btn-danger">Eliminar Venta</button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h6>ID</h6>
                    <p>3</p>
                  </div>
                  <div class="col">
                    <h6>Documento Del Cliente</h6>
                    <p>48798</p>
                  </div>
                  <div class="col">
                    <h6>Nombre Del Cliente</h6>
                    <p>Pablo Guzman</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body text-dark">
              <div class="container">
                <div class="row g-2">
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Creada por: </strong><a>Vendedor1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Inicio: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Producto: </strong><a>Camiseta Polo 1</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Fecha de Pago: </strong><a>date</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Mercado: </strong><a>Tienda Virtual</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Estado: </strong><a>Recibido</a></div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 border bg-light"><strong>Total Venta: </strong><a>$ Valor</a></div>
                  </div>
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                <button type="button" class="btn btn-dark">Modificar Venta</button>
                <button type="button" class="btn btn-danger">Eliminar Venta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Accordion_Admin