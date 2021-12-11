package com.apicliente.ApiCliente.Servicios;

//import java.util.ArrayList;//lo cabie por el * en controlador tsmbien
import java.util.*;
import java.util.Optional;

import com.apicliente.ApiCliente.Modelos.ClienteModelo;
import com.apicliente.ApiCliente.Repositorios.ClienteRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServicio {
    
    @Autowired
    ClienteRepo repo; //creo una variable para acceder a los metodos mongo

    public ClienteModelo guardaCliente(ClienteModelo cliente) {
        
        return repo.save(cliente);
    }

    public ArrayList<ClienteModelo> consultaTodos() {
        return (ArrayList<ClienteModelo>) repo.findAll();
    }

    public boolean eliminaCliente(Long id){
        if (repo.existsById(id)) {            
            repo.deleteById(id);
            return true;
        } else {
            return false;
        }
        
    }
    //findbyid es trae opconal osea q si esta lo trae y si no no trae nada por 
        //eso el optional en cliente modelo para q no bote error si no esta

    public Optional<ClienteModelo> consultaClienteId(Long id){
        return repo.findById(id); 
    }

    public ArrayList<ClienteModelo> obtenerClientePorNombre(String nombre){
        return repo.findByNombre(nombre);
    }

    public ClienteModelo buscaCorreo(String correo){
        return repo.findByCorreo(correo);
    }
}
