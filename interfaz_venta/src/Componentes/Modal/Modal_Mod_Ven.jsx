import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

export default function Modal_Mod_Ven () {
    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="accordion p-2 bg-secondary" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h6>ID</h6>
                                    <p>3</p>
                                </div>
                                <div className="col">
                                    <h6>Documento Del Cliente</h6>
                                    <p>48798</p>
                                </div>
                                <div className="col">
                                    <h6>Nombre Del Cliente</h6>
                                    <p>Pablo Guzman</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body text-dark">
                        <div className="container">
                            <div className="row g-2">
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Creada por: </strong><a>Vendedor1</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Fecha de Inicio: </strong><a>date</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Producto: </strong><a>Camiseta Polo 1</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Fecha de Pago: </strong><a>date</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Mercado: </strong><a>Tienda Virtual</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Estado: </strong><a>Recibido</a></div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border bg-light"><strong>Total Venta: </strong><a>$ Valor</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end p-1">
                            <Button className="btn btn-dark m-2" onClick={handleShow}>
                                Modificar Venta
                            </Button>

                            <Modal show={show1} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modificar Venta</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Producto</Form.Label>
                                            <Form.Control type="product" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Fecha Inicial</Form.Label>
                                            <Form.Control type="datei" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Fecha Del Pago</Form.Label>
                                            <Form.Control type="datef" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Vendedor</Form.Label>
                                            <Form.Control type="seller" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Mercado</Form.Label>
                                            <Form.Control type="market" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Documento Del Cliente</Form.Label>
                                            <Form.Control type="documentc" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nombre Del Cliente</Form.Label>
                                            <Form.Control type="nombrec" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Estado</Form.Label>
                                            <Form.Control type="state" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Total Venta</Form.Label>
                                            <Form.Control type="total" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className="bg-dark" variant="primary" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button className="bg-dark" variant="primary" onClick={handleClose}>
                                        OK
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}