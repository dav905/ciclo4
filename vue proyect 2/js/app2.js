Vue.component("form-registro", {
  data() {
    return {
      contador: 0,
      id: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
    };
  },

  //template: "<button v-on:click='contador++'>Pulsado {{ contador }} veces </button>",
  template: `<div><h1>Registro de clientes</h1>
    <label for="id">Id</label>
    <input type="text" name="id" id="id" v-model="id"><br><br>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" v-model="nombre"><br><br>
    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" id="apellido" v-model="apellido"><br><br>
    <label for="telefono">telefono</label>
    <input type="tel" name="telefono" id="telefono" v-model="telefono"><br><br>
    <label for="correo">Correo</label>
    <input type="email" name="correo" id="correo" v-model="correo"><br><br>
    <input type="button" value="Guardar cliente" v-on:click="guardarCliente"></div>`,

  methods: {
    guardarCliente() {
      const endpoint = "http://localhost:8080/cliente";
      const opciones = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.id,
          nombre: this.nombre,
          apellido: this.apellido,
          telefono: this.telefono,
          correo: this.correo,
        }),
      };

      fetch(endpoint, opciones).then(async (response) => {
        // alert("cliente guardado");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cliente Guardado",
        });
      });
    },
  },
}),


  Vue.component("consulta-cliente", {
    data() {
      return {
        datosconsulta: {},
      };
    },

    template: `<div>        
        
        <input type="button" value="Ver clientes" v-on:click="consultarClientes">
        <table border="1px"> 
            <thead>
                <tr >
                    <td>Cedula</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Telefono</td>
                    <td>Correo</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in datosconsulta">
                    <td>{{ cliente.id}}</td>
                    <td>{{ cliente.nombre}}</td>
                    <td>{{ cliente.apellido}}</td>
                    <td>{{ cliente.telefono}}</td>
                    <td>{{ cliente.correo}}</td>
                </tr>
            </tbody>
        </table>
        </div>`,

    mounted() {
      // con esto se ejecuta sin tener que dar al boton ya que
      // monta el metodo de una vez
      this.consultarClientes();
    },

    methods: {
      consultarClientes() {
        const endpoint = "http://localhost:8080/cliente";
        const opciones = { method: "GET" };

        fetch(endpoint).then(async (response) => {
          this.datosconsulta = await response.json();
        });
      },
    },
  }),

  
  Vue.component("eliminar-cliente", {
    data() {
      return {
        ideliminar: "",
      };
    },

    template: `<div>        
        
            <h3>Eliminar cliente</h3>
            <input type="text" v-model=ideliminar>
            <input type="button" value="Eliminar cliente" v-on:click="eliminaCliente">
        </div>`,

    methods: {
      eliminaCliente() {
        const endpoint = "http://localhost:8080/cliente/" + this.ideliminar;
        const opciones = { method: "DELETE" };

        fetch(endpoint, opciones).then(async (response) => {
          alert("cliente eliminado correctamente");
          this.idEliminar = "";
          this.consultarClientes();
        });
      },
    },
  });

Vue.component("buscar-nombre", {
  data() {
    return {
      nombrebuscar: "",
      datos: [],
    };
  },
  template: `<div>
    <label for="">Nombre</label>
    <input type="text" v-model="nombrebuscar">
    <input type="button" value="Buscar" v-on:click="buscarNombre">
    <table border="1px"> 
        <thead>
            <tr >
                <td>Cedula</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Telefono</td>
                <td>Correo</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cliente in datos">
                <td>{{ cliente.id}}</td>
                <td>{{ cliente.nombre}}</td>
                <td>{{ cliente.apellido}}</td>
                <td>{{ cliente.telefono}}</td>
                <td>{{ cliente.correo}}</td>
            </tr>
        </tbody>
    </table>
    
    </div>
    `,
    methods:{
        buscarNombre(){
            const endpoint = "http://localhost:8080/cliente/buscar/"+this.nombrebuscar;
        const opciones = { method: "GET" };

        fetch(endpoint).then(async (response) => {
          this.datos = await response.json();
        })
        }
    }


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
