import React from 'react'
import './Accordion.css'

function Accordion_Producto() {
    return (
        <div className="accordion p-2 bg-secondary" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button accordion-button-dark" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h6>Código</h6>
                        <p>1</p>
                      </div>
                      <div className="col">
                        <h6>Producto</h6>
                        <p>Camiseta Polo 4</p>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body text-dark">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 border bg-light"><strong>Precio: $</strong><a>10000</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                    <button type="button" className="btn btn-dark">Modificar Producto</button>
                    <button type="button" className="btn btn-danger">Eliminar Producto</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h6>Código</h6>
                        <p>2</p>
                      </div>
                      <div className="col">
                        <h6>Producto</h6>
                        <p>Camiseta Polo 5</p>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body text-dark">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 border bg-light"><strong>Precio: $</strong><a>30000</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                    <button type="button" className="btn btn-dark">Modificar Producto</button>
                    <button type="button" className="btn btn-danger">Eliminar Producto</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h6>Código</h6>
                        <p>3</p>
                      </div>
                      <div className="col">
                        <h6>Producto</h6>
                        <p>Camiseta Polo 5</p>
                      </div>
                    </div>
                  </div>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body text-dark">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 border bg-light"><strong>Precio: $</strong><a>140000</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                    <button type="button" className="btn btn-dark">Modificar Producto</button>
                    <button type="button" className="btn btn-danger">Eliminar Producto</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default Accordion_Producto