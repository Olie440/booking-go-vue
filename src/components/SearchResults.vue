<template>
  <div className="search-results">
    <input
      aria-label="city, airport, station, region and district..."
      class="search-results__input"
      id="search-results"
      placeholder="city, airport, station, region and district..."
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchResults extends Vue {}
</script>

<style scoped>
.search-results__input {
  display: inline-block;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
}

.search-results__input:focus {
  border-color: #0f6193;
  outline: 0;
}

.search-results__input::placeholder {
  font-size: 14px;
}
</style>
