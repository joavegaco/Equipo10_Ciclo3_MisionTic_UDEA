import React, { useState } from "react";
import { Collapse, Table, Modal, Button, Form } from 'react-bootstrap';
import "./Modal.css"

export default function Modal_Mod_Adm() {
    const [open, setOpen] = useState(false);
    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col">
                    <Table responsive variant="light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Documento Del Cliente</th>
                                <th>Nobre Del Cliente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                onClick={() => setOpen(!open)}
                                aria-expanded={open}
                            >
                                <td>1</td>
                                {Array.from({ length: 2 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <Collapse in={open}>
                                <div>
                                    <div className="container" text-white>
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
                            </Collapse>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}