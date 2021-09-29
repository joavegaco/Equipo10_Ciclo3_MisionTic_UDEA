import React from 'react';

import Header_Vendedor from '../Header/Header_Vendedor'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Footer from '../Footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 

class Home_Vendedor extends React.Component {

	render() {

		return (


			<div>
				<React.StrictMode>
					<>

						<Header_Vendedor />

						<main role="main" className="flex-shrink-0 mt-5">

							<div class="card-body text-white bg-secondary">
								<div class="description">
									<h1>Lista de Ventas</h1>
								</div>
								<div class="container-fluid">
									<div class="row row-cols-2">
										<div class="col-xxl-6">
											Buscar Producto
											<div class="input-group mb-1">
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-xxl-6">
											Seleccionados
											<div class="input-group mb-1">
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-xxl-6">
											Fecha Inicial
											<input type="date" class="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
												min="{{ $min->time }}">
										</div>
										<div class="col-xxl-6">Fecha del Pago
											<input type="date" class="form-control mb-1" name="tugash" value="{{ $end_time }}" max="{{ $max->time }}"
												min="{{ $min->time }}">
										</div>
										<div class="col-xxl-6">
											Vendedor
											<div class="input-group mb-1">
												<input type="text" class="form-control">
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
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-xxl-6">
											Nombre Del Cliente
											<div class="input-group mb-1">
												<input type="text" class="form-control">
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
												<input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
											</div>
										</div>
									</div>
								</div>
								<div class="container">
									<div class="d-grid gap-2 d-md-block p-1">
										<button class="btn btn-dark" type="button">Registrar Venta</button>
										<button class="btn btn-dark" type="button">Previsualizar Venta</button>
									</div>
								</div>
								<div class="container-fluid p-1" id="accordion_search_bar_container">
									<div class="col-xxl-6">
										<div class="input-group mb-1">
											<input type="search" id="accordion_search_bar" class="form-control rounded"
												placeholder="Buscar en la Lista" />
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

					export default Home_Vendedor;