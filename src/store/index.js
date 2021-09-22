import { createStore } from "vuex";
import rootActions from "./actions";
import rootGetters from "./getters";
import rootMutations from "./mutations";
import productModule from "./moudles/products";
import cartMoudle from "./moudles/cart";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: { prod: productModule, cart: cartMoudle },
});
