class Header_Vendedor extends React.Component {

    render() {

        return (

            <div>
                <React.StrictMode>
                    <div class="card-header bg-dark">
                        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="./lista_ventas_vendedor.html">
                                    <img src="assets/img/LogoAtomiumBlanco.png" alt="" width="30" height="24">
                                    atomium
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 50px;">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="./lista_ventas_vendedor.html">Gestion De Ventas</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Vendedor
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Salir</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </React.StrictMode>
                <div>

                    )

    }

}

                    export default Header_Vendedor;