
import Vue from 'vue';
import App from './App';
import store from './store';
import axios from 'axios'; 



var app = new Vue({
  el: '#app',
  store,
  render:h=>h(App),

  data() {
    return{
      itemsdata:[],
    }  
  },

  created () {
    this.$store.dispatch('getData');
    },
});



