import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    listeLikes: [],
    listePanier: []
  },

  getters: {
    likesList: state => {
      return state.likes
    },
    articlesList: state => {
        return state.nbArticles
    }
  },

  /*mutations: {
    ADD_LIKE (state) {
      state.likesCount++;
    },
    REMOVE_LIKE (state) {
        state.likesCount--;
    },

    REMOVE_LIST (state, listId) {
      const index = state.listes.findIndex(list => list.id === listId)
      state.listes.splice(index, 1)
    },
    
    ADD_ITEM_IN_LIST (state, payload) {
        const index = state.listes.findIndex(list => list.id === Number(payload.listId))
        state.listes[index].items.push(payload.newItem)
    },

    REMOVE_ITEM_IN_LIST (state, payload) {
        const indexListe = state.listes.findIndex(list => list.id === Number(payload.listId))
        const liste = state.listes.find(list => list.id === Number(payload.listId))
        const indexItem = liste.items.findIndex(item => item.id === Number(payload.itemId))
        state.listes[indexListe].items.splice(indexItem, 1)
    },

    initialiseStore (state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  }*/
})

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state))
})

export default store