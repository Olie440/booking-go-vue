<template>
  <div id="app">
    <TheCarSearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheCarSearch from "./components/TheCarSearch.vue";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";

@Component({
  components: {
    TheCarSearch
  }
})
export default class App extends Vue {}
</script>
