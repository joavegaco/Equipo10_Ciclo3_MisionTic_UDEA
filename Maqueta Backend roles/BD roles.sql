create database gestionRoles;
use gestionRoles;

#A continuación se crearán las caterorias que manejará la BD.
create table vendedor(
	estado varchar(15) not null,
    nombre varchar(50) not null,
    cargo varchar(15) not null,
    #Suponiendo que las oficinas no se manejen de manera numérica
    oficina varchar(20) not null,
    edad int not null,
    fecha date not null,
    id_vendedor int not null
);

create table cliente(
	id_vendedor int not null,
    nombre varchar (50) not null,
    id_venta int not null
);