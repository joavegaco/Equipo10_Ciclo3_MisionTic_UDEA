import React, { useState } from "react";
import { Collapse, Table, Modal, Button, Form } from 'react-bootstrap';
import "./Modal.css"


export default function Modal_Modificar() {
    const [open, setOpen] = useState(false);
    const [show1, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (

        <div className="container-fluid bg-secondary">
        <div className="row">
            <div className="col">
                <Table responsive variant="light">
                    <thead>
                        <tr>
                            <th>ID Producto</th>
                            <th>Descripción Del Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                        >
                            <td>1</td>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <Collapse in={open}>
                            <div>
                                <div className="container" text-white>
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
                            </div>
                        </Collapse>
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
    );
}
