-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2021 at 12:27 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comercioyusuarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `administradordeventas`
--

CREATE TABLE `administradordeventas` (
  `IDVenta` varchar(50) NOT NULL,
  `ValorVenta` int(10) NOT NULL,
  `DescripcionVenta` int(100) NOT NULL,
  `FechaVenta` date NOT NULL,
  `FechaPago` date NOT NULL,
  `IDVendedor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contrasenya`
--

CREATE TABLE `contrasenya` (
  `ID` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gestionusuarios`
--

CREATE TABLE `gestionusuarios` (
  `IDUsuario` varchar(50) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Rol` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(32) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `tienda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `gestionvendedores`
--

CREATE TABLE `gestionvendedores` (
  `IDVendedor` varchar(50) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Especialidad` varchar(50) NOT NULL,
  `Telefono` varchar(12) NOT NULL,
  `FechaIngreso` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administradordeventas`
--
ALTER TABLE `administradordeventas`
  ADD PRIMARY KEY (`IDVenta`),
  ADD KEY `IDVendedor` (`IDVendedor`);

--
-- Indexes for table `gestionusuarios`
--
ALTER TABLE `gestionusuarios`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- Indexes for table `gestionvendedores`
--
ALTER TABLE `gestionvendedores`
  ADD PRIMARY KEY (`IDVendedor`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administradordeventas`
--
ALTER TABLE `administradordeventas`
  ADD CONSTRAINT `administradordeventas_ibfk_1` FOREIGN KEY (`IDVendedor`) REFERENCES `gestionvendedores` (`IDVendedor`);

--
-- Constraints for table `gestionvendedores`
--
ALTER TABLE `gestionvendedores`
  ADD CONSTRAINT `gestionvendedores_ibfk_1` FOREIGN KEY (`IDVendedor`) REFERENCES `gestionusuarios` (`IDUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
