//INFO: el estado del carrito

const state= () => ({ //U: lo que guardo en memoria
	items: []
});

const mutations= { //U: como cambia (PRIVADO)
	agregar: function (state,que) {
		console.log("carrito, agregar",que.dsc);
		state.items.push(que);
		console.log("carrito agregado",que.dsc, JSON.stringify(state.items,1) );
	},
	quitar: function (state,posicion) {
		console.log("carrito, quitar",posicion);
		var que= state.items[posicion];
		state.items.splice(posicion,1); //A: eliminar el item en esa posicion
		console.log("carrito, quitado",posicion, que, JSON.stringify(state.items,1) );
	}
}

const getters= { //U: conseguir informacion pero no modificar
	items (state) {
		return state.items;
	}
}

const actions= { //U: como interactua el resto de la app
  agregar ({ state, commit }, item) {
    commit('agregar', item);
  },
  quitar ({ state, commit }, item) {
    commit('quitar', item);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
