<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="Photo" :alt="product" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{product}}</h4>
        <div class="card-text">${{price}}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(quantity)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'item',
  
  props: ['quantity', 'product', 'Photo', 'price'],
  methods: {
    addToCart(quantity) {
      this.$store.dispatch('addToCart', quantity);
    console.log(quantity)
    },
  },
};
</script>