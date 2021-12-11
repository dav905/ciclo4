package com.apicliente.ApiCliente.Repositorios;

import java.util.ArrayList;

import com.apicliente.ApiCliente.Modelos.ClienteModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepo extends MongoRepository <ClienteModelo, Long>{
    //aqui con esto es para traer por un espacio especifico de los datos, ejemplo nombre
    ArrayList<ClienteModelo> findByNombre(String nombre);

    //buscar por correo
    ClienteModelo findByCorreo(String correo);

}
