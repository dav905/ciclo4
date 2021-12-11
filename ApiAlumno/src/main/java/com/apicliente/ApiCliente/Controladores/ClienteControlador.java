package com.apicliente.ApiCliente.Controladores;

// import java.util.ArrayList;
import java.util.*;
import java.util.Optional;

import com.apicliente.ApiCliente.Modelos.ClienteModelo;
import com.apicliente.ApiCliente.Servicios.ClienteServicio;

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

@RestController
@CrossOrigin(origins = "*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})// esta linea es para que acepte origenes cruzados ente el front y back
@RequestMapping("/cliente")
public class ClienteControlador {
    
    @Autowired
    ClienteServicio serv;

    //http://localhost:8080/cliente asi agregaria a clientes
    @PostMapping()
    public ClienteModelo guardaCliente(@RequestBody ClienteModelo Cliente){
        return serv.guardaCliente(Cliente);
    }

    //http://localhost:8080/cliente asi con get se traeria todos los clientes
    @GetMapping()
    public ArrayList<ClienteModelo> consultaTodos(){
        return serv.consultaTodos();
    }

    // http://localhost:8080/cliente/5 el 5 es el id /(id) asi borraria el registro 5
    @DeleteMapping(path = "/{id}")
    public boolean eliminaCliente(@PathVariable("id") Long id){
        return serv.eliminaCliente(id);
    }

    // http://localhost:8080/cliente/5 trae el 5 registro
    @GetMapping(path = "/{id}")
    public Optional<ClienteModelo> consultaPorId(@PathVariable("id") Long id){
        return serv.consultaClienteId(id);
    }

    //http://localhost:8080/cliente/buscar/david asi trae la consulta por nombre
    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<ClienteModelo> obtenerPorNombre(@PathVariable("nombre") String nombre){
        return serv.obtenerClientePorNombre(nombre);
    }

    //http://localhost:8080/cliente/consultacorreo/asd@gmail.com asi se consulta por coreo si la condicion es q solo haya uno 
    //si son varios edeberia cabiarse donde sea necesario por un arraylist
    @GetMapping(path = "/consultacorreo/{correo}")
    public ClienteModelo buscaPorCorreo(@PathVariable("correo") String correo){
        return serv.buscaCorreo(correo);
    }
}
