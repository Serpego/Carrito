<template>
  <body>
	<div>
	<h4>Catálogo</h4>

<ul>
    <li
      v-for="producto in catalogo"
      :key="producto.id">
      {{ producto.dsc }} $ {{ producto.precio }} 
	<img width="100" class="team" v-bind:src="producto.foto">

      <button
        @click="agregarAlCarrito(producto)">
        Añadir al carrito
      </button>

     </li>
  </ul>

	<!-- XXX: lo que ya tiene el carrito deberia ir en otro componente -->
	<h4>Carrito de Veralda</h4>
	<carrito/>
	</div>
</body>
</template>

<script>
import Carrito from '~/components/carrito.vue';
var ProductosDePrueba= [
  {id: 1, dsc: "ART: 522 BIKINI TOP SOFT.", precio: 390.00,foto: 'ver2.jpg'},
  {id: 2, dsc: "ART: 500 BIKINI TRIANGULO.", precio:400.0, foto:'ver8.jpg'},
{id: 3, dsc: "ART: 502 BIKINI TOP SOFT.", precio:450.00, foto:'ver10.jpg'},
{id: 4, dsc: "ART: 5012 CONJ. SOFT CON COLA LESS.", precio:420.00, foto:'ver4.jpg'},
{id: 5, dsc: "ART: 1148 CONJ. SOFT C/ COLA LESS.", precio:225.00, foto:'ver5.jpg'},
]; //XXX: mover a store y api
export default {
  name: "PagComprar",
	components: {
		Carrito
	},
  data () {return{ //U: funcion, devuelve clave-valor con datos que uso
    catalogo: ProductosDePrueba,
  } },
  computed: { //U: propiedades que se calculan en base a otras
		carrito () { return this.$store.getters["carrito/items"]; }
	}, 
	methods: { //U: acciones de botones, etc.
		agregarAlCarrito: function (que) {
			this.$store.dispatch("carrito/agregar",que);
		},
		quitarDelCarrito: function (posicion) {
			this.$store.dispatch("carrito/quitar",posicion);
		}
	},
  created () { console.log("created",this); } //U: para inicializar el componente
}
</script>
<style>
h2{
color:#52565E;
  font-family:verdana;
}
body{background:#D7D7D8;

}
ul{font-size:22px;
}
a{
display: none;
}
</style>