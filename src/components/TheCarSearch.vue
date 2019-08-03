<template>
  <div class="car-search screen background--blue">
    <div class="car-search__search-container background--yellow">
      <h2 class="car-search__header">Let’s find your ideal car</h2>
      <label class="car-search__label" for="car-search__search">
        Pick-up Location
      </label>
      <TheCarSearchResults />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheCarSearchResults from "./TheCarSearchResults.vue";

@Component({
  components: {
    TheCarSearchResults
  }
})
export default class CarSearch extends Vue {}
</script>

<style scoped>
.car-search__search-container {
  display: block;
  width: 35rem;
  margin: 7.5rem auto 0 auto;
  padding: 1.75rem 1.5rem;
}

.car-search__header {
  margin-bottom: 1.5rem;
}

.car-search__label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 14px;
}

@media (max-width: 756px) {
  .car-search__search-container {
    display: block;
    width: calc(100% - 2rem);
    margin: 1rem;
  }
}
</style>
