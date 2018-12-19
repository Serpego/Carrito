<template>
  <div>
		<b-navbar toggleable="sm" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand  href="/">Tienda Online Veralda</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
			<b-link to="carrito"><div class="carrito">{{carritoCnt}}</div></b-link>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->

    <nuxt/>
  </div>
</template>

<script>
export default {
	computed: {
		carritoCnt () { return this.$store.getters["carrito/items"].length; } 
	}
}
</script>

<style>


.carrito {
  width: 2em;
  height: 2em;
  text-align: center;
  background-image: url("~/carrito.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>