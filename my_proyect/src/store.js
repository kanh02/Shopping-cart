import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; 

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        itemsdata:[],
        inCart: [],
    
    },
    getters: {
      itemsdata: state => state.itemsdata,
      inCart: state => state.inCart,
    },
    mutations: {
    
      ADD_TO_CART(state, quantity) { state.inCart.push(quantity); 
      },
      REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);
      },
      getData(state,itemsdata){state.itemsdata.push(itemsdata);
      },


    },
    actions: {
      addToCart(context, quantity) { context.commit('ADD_TO_CART', quantity); },
      removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index);},
      getData({commit}) { 
        axios.get('https://api.myjson.com/bins/1037pq')
        .then(function (response) {
           commit.itemsdata = response.data.items;
            console.log(commit.itemsdata);
          })},
  }
});