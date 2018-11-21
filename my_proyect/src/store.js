import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
   
    itemsdata:[{"product":"Vaccum","quantity":5,"price":25,"Photo":"http://www.dikomnepal.com/wp-content/uploads/2016/03/BST-821-1600W.jpg","categoria":"electronic"},{"product":"Mistery Book","quantity":36,"price":11,"Photo":"https://images-eu.ssl-images-amazon.com/images/I/518zztTXGTL.jpg","categoria":"library"},{"product":"movil samsung","quantity":9,"price":280,"Photo":"https://static.carrefour.es/hd_350x_/crs/cdn_static/catalog/hd/346590_00_1.jpg","categoria":"electronic"},{"product":"cable usb3","quantity":54,"price":12.5,"Photo":"https://cdn-reichelt.de/bilder/web/xxl_ws/C650/USB3_AA_MIC1_BL_01.png","categoria":"electronic"},{"product":"glass fashion","quantity":150,"price":7,"Photo":"https://cdn.pixabay.com/photo/2017/08/06/12/19/sunglass-2591983_960_720.jpg","categoria":"fashion"},{"product":"set color pen profesional","quantity":41,"price":17,"Photo":"https://i.ebayimg.com/images/g/zH0AAOxy4t1SjTvE/s-l300.jpg","categoria":"library"},{"product":"calendary kitty","quantity":10,"price":2,"Photo":"https://todohellokitty.net/wp-content/uploads/2013/03/calendario-marzo-2013-con-hello-kitty.jpg","categoria":"library"},{"product":"addidas sp7","quantity":32,"price":55,"Photo":"https://cdn.runrepeat.com/i/adidas/25098/adidas-originals-men-s-x-plr-dark-blue-dark-blue-grey-three-8-medium-us-men-s-dark-blue-dark-blue-grey-three-cc83-600.jpg","categoria":"fashion"},{"product":"pc gamming","quantity":10,"price":850,"Photo":"https://imgredirect.milanuncios.com/fg/2810/68/281068182_1.jpg?VersionId=Klei5IINR.pNBnEpNBtPr2NyJJJLEWJw","categoria":"electronic"},{"product":"laptop asus","quantity":8,"price":350,"Photo":"https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889349613269.jpg","categoria":"electronic"},{"product":"portable batery","quantity":43,"price":8.5,"Photo":"https://www.bhphotovideo.com/images/images2000x2000/xuma_bub_a26b_2600_mah_portable_power_1062792.jpg","categoria":"electronic"},{"product":"router tplink845","quantity":5,"price":18.5,"Photo":"https://http2.mlstatic.com/router-inalabrico-tp-link-tl-wr840n-D_NQ_NP_958604-MEC25790620972_072017-F.jpg","categoria":"electronic"},{"product":"play station 4","quantity":25,"price":250,"Photo":"https://i.blogs.es/afd79c/1366_2000/450_1000.jpg","categoria":"electronic"},{"product":"back pack Adiddas","quantity":65,"price":28,"Photo":"https://assets.adidas.com/images/w_600,f_auto,q_auto/b5d12f9ba4cd4eb3bf56a8e300204fd2_9366/Prime_4_Backpack_Black_CK0336_01_standard.jpg","categoria":"fashion"},{"product":"hood starcraft","quantity":5,"price":45,"Photo":"https://media.sweatshirtxy.com/styles/large/s3/s3fs-public/sweatshirt-images/starcraft-protoss-printed-fleece-pullover-hoodies-for-men-xxxl-hood-sweatshirt648.jpg?itok=7IxdLHCm","categoria":"fashion"},{"product":"Cronicle Vampiric","quantity":15,"price":8,"Photo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Complete_Vampire_Chronicles_cover.jpg/220px-The_Complete_Vampire_Chronicles_cover.jpg","categoria":"library"},{"product":"java codex","quantity":24,"price":28,"Photo":"http://www.libreriacodex.com/imagenes/9788441/978844153993.GIF","categoria":"library"},{"product":"helmet motorcycle","quantity":12,"price":150,"Photo":"https://www.webbikeworld.com/wp-content/uploads/2017/12/dual-sport.jpg","categoria":"sports"},{"product":"soccer ball","quantity":45,"price":35,"Photo":"https://i.ebayimg.com/thumbs/images/g/Z3sAAOSwCU1YsvAT/s-l225.jpg","categoria":"sports"},{"product":"american football ball","quantity":26,"price":45,"Photo":"https://i.ebayimg.com/images/g/ICYAAOSwiYRas47G/s-l300.jpg","categoria":"sports"},{"product":"tennis racket","quantity":8,"price":80,"Photo":"https://target.scene7.com/is/image/Target/GUEST_f63e139d-f5a5-4d93-afc3-5f8f5ba2f10a?wid=488\u0026hei=488\u0026fmt=pjpeg","categoria":"sports"},{"product":"scarf","quantity":80,"price":5,"Photo":"https://www.guggenheimstore.org/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20728-klee-red_1.jpg","categoria":"fashion"}],
    inCart: [],
    
  },

  getters: {
    itemsdata: state => state.itemsdata,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, quantity) { state.inCart.push(quantity); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);
    }
  },
  actions: {
    addToCart(context, quantity) { context.commit('ADD_TO_CART', quantity); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },


});