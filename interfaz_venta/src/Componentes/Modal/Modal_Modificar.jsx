import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';


export default function Modal_Modificar() {
    const [show1, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
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

                        <Button className="btn btn-dark m-2" onClick={handleShow}>
                            Modificar Producto
                        </Button>

                        <Modal show={show1} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modificar Producto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control type="code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Producto</Form.Label>
                                        <Form.Control type="product" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control type="price" />
                                    </Form.Group>
                                    <Modal.Footer>
                                        <Button className="bg-dark" variant="primary" onClick={handleClose}>
                                            Cancelar
                                        </Button>
                                        <Button className="bg-dark" variant="primary" onClick={handleClose}>
                                            OK
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal.Body>
                        </Modal>

                        <Button className="btn btn-danger m-2" onClick={handleShow2}>
                            Eliminar
                        </Button>

                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>Eliminar Producto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>¿Seguro de que quieres <strong>Eliminar</strong> el Producto?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Cancelar
                                </Button>
                                <Button className="bg-danger" variant="primary" onClick={handleClose2}>
                                    OK
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div   >
            </div>
        </div >
    );
}
