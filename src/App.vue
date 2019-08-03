<template>
  <div id="app">
    <CarSearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CarSearch from "./components/CarSearch.vue";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";

@Component({
  components: {
    CarSearch
  }
})
export default class App extends Vue {}
</script>
