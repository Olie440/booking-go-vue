import Vue from "vue";
import Vuex, { Store } from "vuex";
import { carSearch } from "./car-search";

Vue.use(Vuex);

export default new Store({
  modules: {
    carSearch
  }
});
