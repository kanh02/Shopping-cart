<template>
<div>
    <div>
        <img src="./assets/carro.png">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart {{ numInCart }}</button>
    </div>
    <div id="shoppingCart" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h3 class="modal-title">Shopping Cart</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>  
                </div>
                <div class="modal-body">
                    <h5>Items:</h5>
                </div>
                     <table class="table">
                        <tbody>
                             <tr v-for="(item, index) in cart">
                                 <td>{{item.product}}</td>
                                 <td>{{item.price}}€</td>
                                 <td> <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button></td>
                            </tr>
                            <tr>
                                 <th>Total Price:</th>
                                 <th>{{total}}€</th>
                            </tr>
                        </tbody>
                    </table>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                        <button class="btn btn-primary">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.itemsdata.find((itemsdataItem) => {
          return cartItem === itemsdataItem.quantity;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },methods: {
    removeFromCart(index) {this.$store.dispatch('removeFromCart', index);},
  }
};
</script>
<style scoped>
img{
    width: 50px;
    height: 50px;
}
</style>
