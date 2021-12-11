Vue.component("form-registro", {
  data() {
    return {
      
      id: 0,
      nombre:"",
      apellido:"",
      nota1: 0,
      nota2: 0,
      nota3: 0,
      nota4: 0,
      promedio:0
    };
  },

    template: `<div><div>
    <h3>Bienvenido a la seccion de calculo de nota final</h3>
    </div>
  <div class="contenedor-nota">
    <div>
        <p>La Nota Final se calcula con la siguiente formula</p>
    </div>
    <div id="imagen">
    <img src="./img/formula nota.PNG" alt="formula calculo nota">
    </div>
  </div>

  <div class="contenedor-formulario">     
        <div class="formulario">
            <h2>Ingrese sus datos y notas</h2>
            <span class="required_notification">* Datos requeridos</span>
            <br>
            <br>
            <label for="nota1">Codigo:</label>
            <input type="number" name="id" id="id" v-model="id" placeholder="Nota Primer previo" title="Codigo alumno">
            <br>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" v-model="nombre" placeholder="Ingrese su nombre" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"/>
            <br>
            <label for="apellidos">Apellido:</label>
            <input type="text" name="apellidos" id="apellidos" v-model="apellidos" placeholder="Ingrese su apellido" pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"/>
            <br>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email" placeholder="asd@mail.com" />

            <br>
            <label for="nota1">Nota 1:</label>
            <input type="number" name="nota1" id="nota1" v-model="nota1" placeholder="Nota Primer previo" step="0.1" min=0 max=5
                title="Notas con decimales (0,0)">
            <br>

            <label for="nota2">Nota 2:</label>
            <input type="number" name="nota2" id="nota2" v-model="nota2" placeholder="Nota Segundo previo" step="0.1" min=0 max=5
                title="Notas con decimales (0,0)">
            <br>
            <label for="nota3">Nota 3:</label>
            <input type="number" name="nota3" id="nota3" v-model="nota3" placeholder="Nota Trabajos" step="0.1" min=0 max=5
                title="Notas con decimales (0,0)">
            <br>
            <label for="nota4">Nota Examen:</label>
            <input type="number" name="nota4" id="nota4" v-model="nota4" placeholder="Nota Examen final" step="0.1" min=0 max=5
                title="Notas con decimales (0,0)">
            <br>
            </br>
            <div class="elemento">
                <input type="submit" value="Enviar" v-on:click="verificarNota" v-on:click="guardarEstudiante">
            </div>
            <br>
            <div>
               
                <h3>Resultado:</h3>
                <br>
                <p id="mensaje2" class=""></p>
                <input id="mensaje" type="hidden" readonly>
                <input id="nota10" type="hidden" readonly>
                <input id="nota20" type="hidden" readonly>
                <input id="nota30" type="hidden" readonly>
                <input id="nota40" type="hidden" readonly>
                <input id="promedio" name="promedio" type="hidden" readonly>
            </div>

        </div>  
  </div>
  <div>
  <br><br>
   
  </div>`,
  methods: {
    guardarEstudiante() {
      const endpoint = "http://localhost:8080/estudiante";
      const opciones = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.id,
          nombre: this.nombre,
          apellidos: this.apellidos,
          nota1: this.nota1,
          nota2: this.nota2,
          nota3: this.nota3,
          nota4: this.nota4,
          promedio: this.promedio,
          //correo: this.correo,
        }),
      };

      fetch(endpoint, opciones).then(async (response) => {
        // alert("cliente guardado");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Estudiante Guardado",
        });
      });
    },
    verificarNota() {
      let n1=document.getElementById("nota1").value;
      let n2=document.getElementById("nota2").value;
      let n3=document.getElementById("nota3").value;
      let n4=document.getElementById("nota4").value;
  
      let promedio= (((parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3)*0.7)+(parseFloat(n4)*0.3);
  
      var aprobo="aprobo la materia";
      document.getElementById("mensaje").value=aprobo;
      document.getElementById("nota10").value=n1;
      document.getElementById("nota20").value=n2;
      document.getElementById("nota30").value=n3;
      document.getElementById("nota40").value=n4;
      document.getElementById("promedio").value=promedio.toFixed(1);
      
      const respuesta = document.getElementById("mensaje2")
  
      if (promedio.toFixed(1)>=3.1) {
          var aprobo="Aprobo la materia";
          document.getElementById("mensaje").value=aprobo;
          document.getElementById("mensaje2").innerText=aprobo +" con un promedio de -- " + promedio.toFixed(1)+" --";
          console.log(aprobo)
          
          respuesta.classList.toggle("aprobo")
          //window.alert("su promedio fue de "+ promedio.toFixed(1) + " " + aprobo)
      } else {
          var aprobo="NO aprobo la materia";
          document.getElementById("mensaje").value=aprobo;
          document.getElementById("mensaje2").innerText=aprobo +" con un promedio de -- " + promedio.toFixed(1)+" --";
          console.log(aprobo)
          
          respuesta.classList.toggle("perdio")
          //window.alert("su promedio fue de "+ promedio.toFixed(1)+ " " + + aprobo)
      }
  
      
  }
 
  },
}),
 

Vue.component("buscar-codigo", {
  data() {
    return {
      codigoBuscar: "",
      datos: [],
    };
  },
  template: `<div class="contenedor-formulario formulario" >
    <div class="codigo">
    <br>
    <h2  for="">Ingrese su codigo</h2>
    <input  type="text" v-model="codigoBuscar">
    <div class="elemento">
    <input  type="submit" value="Buscar" v-on:click="buscarCodigo">
    </div>
    </div>
    <br>
    <table border="1px"> 
        <thead>
            <tr >
                <td>Codigo</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Nota 1</td>
                <td>Nota 2</td>
                <td>Nota 1</td>
                <td>Nota 1</td>
                <td>Promedio</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="estudiante in datos">
                <td>{{ estudiante.id}}</td>
                <td>{{ estudiante.nombre}}</td>
                <td>{{ estudiante.apellidos}}</td>
                <td>{{ estudiante.nota1}}</td>
                <td>{{ estudiante.nota2}}</td>
                <td>{{ estudiante.nota3}}</td>
                <td>{{ estudiante.promedio}}</td>
            </tr>
        </tbody>
    </table>
    <br>
    </div>
    `,
  methods: {
    buscarCodigo() {
      const endpoint =
        "http://localhost:8080/cliente/" + this.codigoBuscar;
      const opciones = { method: "GET" };

      fetch(endpoint).then(async (response) => {
        this.datos = await response.json();
      });
    },
  },
}),
  new Vue({
    el: "#app",
    data() {
      return {
        menu: 0,
        // datosconsulta: {},
      };
    },
  });
