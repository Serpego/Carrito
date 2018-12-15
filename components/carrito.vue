<template>
	<div>
	<!-- XXX: lo que ya tiene el carrito deberia ir en otro componente -->
  <ul>
    <li
      v-for="(producto, posicion) in carrito"
      >
      {{ producto.dsc }}

      <button
        @click="quitarDelCarrito(posicion)">
        Quitar
      </button>
    </li>
  </ul>
	</div>
</template>

<script>
export default {
  name: "CmpCarrito",
  computed: { //U: propiedades que se calculan en base a otras
		carrito () { return this.$store.getters["carrito/items"]; }
	}, 
	methods: { //U: acciones de botones, etc.
		quitarDelCarrito: function (posicion) {
			this.$store.dispatch("carrito/quitar",posicion);
		}
	},
}
</script>