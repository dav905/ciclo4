package com.api.registroNotas.Modelos;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;

public class EstudianteModelo {

    @Id
    private Long id;

    private String nombre;
    private String apellidos;
    private String codigo;
    private String correo;
    private ArrayList<Long> notas;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public ArrayList<Long> getNotas() {
        return notas;
    }

    public void setNotas(ArrayList<Long> notas) {
        this.notas = notas;
    }
}
