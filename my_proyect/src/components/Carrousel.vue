<template>
    <div>
<!--  carrousel  -->
      <div id="slider" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
        <ul class="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" class="active"></li>
          <li v-for="(item, index) in itemsdata" data-target="#slider" :data-slide-to="index+1"></li>
        </ul>
  <!-- The slideshow -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/carro.png">
          </div>
          <div v-for="item in itemsdata" class="carousel-item">
            <img :src="item.Photo">
          </div>
          </div>
  <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#slider" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#slider" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Carrousel',
    props: ['quantity', 'product', 'Photo', 'price'],
     computed:{
  
    itemsdata() { return this.$store.getters.itemsdata; },
  },
}

</script>
<style scoped>
img{
    width: 250px;
    height: 250px;
}
</style>

