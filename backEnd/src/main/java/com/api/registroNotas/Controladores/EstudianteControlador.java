package com.api.registroNotas.Controladores;

import java.util.ArrayList;
import java.util.*;
import java.util.Optional;

import com.api.registroNotas.Modelos.EstudianteModelo;
import com.api.registroNotas.Servicios.EstudianteServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;// agregue esta libreria a mano junto con el crossorigin
import org.springframework.web.bind.annotation.RestController;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})// esta linea es para que acepte origenes cruzados ente el front y back
@RequestMapping("/estudiante")
public class EstudianteControlador {

    @Autowired
    EstudianteServicio servicio;

    // @GetMapping()
    // public ArrayList<EstudianteModelo> getTodos(){
    //     return servicio.obtenerTodos();
    // }

    //http://localhost:8080/cliente asi agregaria a clientes
    @PostMapping()
    public EstudianteModelo guardaEstudiante(@RequestBody EstudianteModelo Estudiante){
        return servicio.guardaEstudiante(Estudiante);
    }

    //http://localhost:8080/cliente/buscar/david asi trae la consulta por nombre
    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<EstudianteModelo> obtenerPorNombre(@PathVariable("nombre") String nombre){
        return servicio.obtenerEstudiantePorNombre(nombre);
    }

}
