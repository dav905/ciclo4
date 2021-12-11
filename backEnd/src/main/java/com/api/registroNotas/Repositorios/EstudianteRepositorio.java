package com.api.registroNotas.Repositorios;

import com.api.registroNotas.Modelos.EstudianteModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepositorio extends MongoRepository<EstudianteModelo, Long>{
    EstudianteModelo findByNombre(String nombre);
    EstudianteModelo findByApellidos(String apellidos);
    EstudianteModelo findByCodigo(String codigo);
    EstudianteModelo findByCorreo(String correo);
}
