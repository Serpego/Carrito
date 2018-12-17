<template>
  <body>
	<div>
	<h4>Catálogo</h4>

<b-card-group>
    <b-card
      v-for="producto in catalogo"
      :key="producto.id">
      {{ producto.dsc }} $ {{ producto.precio }} 
	<img width="100" class="team" v-bind:src="producto.foto">

      <button
        @click="agregarAlCarrito(producto)">
        Añadir al carrito
      </button>

     </b-card>
  </b-card-group>

	<!-- XXX: lo que ya tiene el carrito deberia ir en otro componente -->
	<h4>Carrito de Veralda</h4>
	<carrito/>
	</div>
</body>
</template>

<script>
import Carrito from '~/components/carrito.vue';
var ProductosDePrueba= [
  {id: 1, dsc: "ART: 522 BIKINI SOFT.", precio: 390.00,foto: 'ver2.jpg'},
  {id: 2, dsc: "ART: 500 BIKINI ROJA.", precio:400.0, foto:'ver8.jpg'},
{id: 3, dsc: "ART: 502 BIKINI TOP.", precio:450.00, foto:'ver10.jpg'},
{id: 4, dsc: "ART: 501 PACK NEW", precio:420.00, foto:'ver4.jpg'},
{id: 5, dsc: "ART: 119 BIKINI VARIADO.", precio:325.00, foto:'ver5.jpg'},
{id: 6, dsc: "ART: 148 BIKINI NOCHE.", precio:425.00, foto:'ver3.jpg'},
{id: 7, dsc: "ART: 111TOP BLANCO.", precio:225.00, foto:'ver6.jpg'},


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

ul{font-size:22px;
}
a{
display: none;
}
</style>