<template>
	<div>
	<h2>Catalogo</h2>
  <ul>
    <li
      v-for="producto in catalogo"
      :key="producto.id">
      {{ producto.dsc }} - {{ producto.precio }} 

      <button
        @click="agregarAlCarrito(producto)">
        Agregar al carrito
      </button>

     </li>
  </ul>

	<!-- XXX: lo que ya tiene el carrito deberia ir en otro componente -->
	<h2>Carrito</h2>
	<carrito/>
	</div>
</template>

<script>
import Carrito from '~/components/carrito.vue';
var ProductosDePrueba= [
  {id: 1, dsc: "hojas A4", precio: 101.00},
  {id: 21, dsc: "marcadores", precio: 21.05},
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