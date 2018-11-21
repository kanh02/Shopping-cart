<template>

  <div id="app" class="container my-5">
    
    <div class="row md-12">
      <Search/>
      <div class="col-md-9">
        <Carrousel/>
      </div>
      <div class="col-md-3">
        <ShoppingCart/>
      </div>
    </div>

     <div class="row">
      <Item  v-for="item in itemsdata"
        :key="item.name"
        :quantity="item.quantity"
        :product="item.product"
        :Photo="item.Photo"
        :price="item.price"/>
    </div>
  </div>
</template>

<script>
import Item from './components/Item.vue';
import ShoppingCart from './ShoppingCart.vue';
import Search from './components/Search.vue';
import Carrousel from './components/Carrousel.vue';


export default {
  name: 'app',

  computed:{
    itemsdata() { return this.$store.getters.itemsdata; },
},
   components: {
    Search,
    Item,
    ShoppingCart,
    Carrousel,
  },
    //created() {
    //  this.getData();
   // },
  //  methods:{
    //  getData:function() {
     //   var vue = this;
		//	fetch("https://api.myjson.com/bins/1037pq", {
		//		method: "GET",
		//	}).then(function (response) {
		//		if (response.ok) {
		//			return response.json();
		//		}
		//		throw new Error(response.statusText);
		//	}).then(function (json) {
		//		vue.itemsdata = json.items;
		//		console.log(vue.itemsdata);

		//	}).then(function () {
		//	}).catch(function (error) {
		//		console.log("Request failed: " + error.message);
		//	})
    //},
	//}
};
</script>
<style scoped>
img{
  width: 120px;
  height: 150px;
}
</style>



