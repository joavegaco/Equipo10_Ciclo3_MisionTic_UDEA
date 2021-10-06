import React from "react";
import './Table.css'
import Modal_Modificar from "../Modal/Modal_Modificar"


function Table_Producto() {
  return (
    <div className="accordion p-2 bg-secondary" id="accordionExample">
        <Modal_Modificar></Modal_Modificar>
    </div>
  );
}

export default Table_Producto