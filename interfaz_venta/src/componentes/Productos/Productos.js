import React from 'react';

import Header_Admin from '../Header/Header_Admin'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Footer from '../Footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 

class Productos extends React.Component {

    render() {

        return (

            <div>
                <React.StrictMode>
                    <>

                        <Header_Admin />

                        <main role="main" className="flex-shrink-0 mt-5">

                            <div class="card-body text-white bg-secondary">
                                <div class="description">
                                    <h1>Agregar Productos</h1>
                                </div>
                                <div class="container-fluid">
                                    <div class="row row-cols-3">
                                        <div class="col-xxl-4">
                                            Código
                                            <div class="input-group mb-1">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xxl-4">
                                            Producto
                                            <div class="input-group mb-1">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xxl-4">
                                            Precio
                                            <div class="input-group mb-1">
                                                <span class="input-group-text">$</span>
                                                <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                                            </div>
                                        </div>
                                        <div class="col-xxl-4">
                                            <div class="d-grid gap-2 d-md-block p-1">
                                                <button class="btn btn-dark" type="button">Crear Producto</button>
                                                <button class="btn btn-dark" type="button">Previsualizar Producto</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid p-1" id="accordion_search_bar_container">
                                        <div class="col-xxl-6">
                                            <div class="input-group mb-1">
                                                <input type="search" id="accordion_search_bar" class="form-control rounded"
                                                    placeholder="Buscar en los productos" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button accordion-button-dark" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <h6>Código</h6>
                                                                <p>1</p>
                                                            </div>
                                                            <div class="col">
                                                                <h6>Producto</h6>
                                                                <p>Camiseta Polo 4</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body text-dark">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="p-3 border bg-light"><strong>Precio: $</strong><a>10000</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                                                        <button type="button" class="btn btn-dark">Modificar Producto</button>
                                                        <button type="button" class="btn btn-danger">Eliminar Producto</button>
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
                                                                <h6>Código</h6>
                                                                <p>2</p>
                                                            </div>
                                                            <div class="col">
                                                                <h6>Producto</h6>
                                                                <p>Camiseta Polo 5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body text-dark">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="p-3 border bg-light"><strong>Precio: $</strong><a>30000</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                                                        <button type="button" class="btn btn-dark">Modificar Producto</button>
                                                        <button type="button" class="btn btn-danger">Eliminar Producto</button>
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
                                                                <h6>Código</h6>
                                                                <p>3</p>
                                                            </div>
                                                            <div class="col">
                                                                <h6>Producto</h6>
                                                                <p>Camiseta Polo 5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body text-dark">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="p-3 border bg-light"><strong>Precio: $</strong><a>140000</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                                                        <button type="button" class="btn btn-dark">Modificar Producto</button>
                                                        <button type="button" class="btn btn-danger">Eliminar Producto</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <Footer />

                    </>
                </React.StrictMode>
                <div>



                    )

    }

}

                    export default Productos;