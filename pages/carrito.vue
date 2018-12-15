<template>
	<div>
	<b-link to="comprar">Volver a comprar</b-link>
	<carrito/>	
	</div>
</template>

<script>
import Carrito from '~/components/carrito.vue';
export default {
	components: {
		Carrito
	}
}
</script>