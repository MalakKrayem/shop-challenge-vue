<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount: <BaseBadge mode="elegant">${{ total }}</BaseBadge>
    </h3>
    <ul>
      <CartItem
        v-for="item in items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></CartItem>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/cart/CartItem.vue";
import BaseBadge from '../components/ui/BaseBadge.vue'

export default {
  components: {
    CartItem,
    BaseBadge
  },

  computed: {
    ...mapGetters("cart", ["items",'total']),


  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
