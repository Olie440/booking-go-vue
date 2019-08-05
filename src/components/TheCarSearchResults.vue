<template>
  <div class="search-results">
    <input
      aria-label="city, airport, station, region and district..."
      class="search-results__input"
      id="search-results"
      placeholder="city, airport, station, region and district..."
    />
    <div
      class="search-results__results"
      v-for="result in results"
      :key="result.id"
    >
      <div class="search-results__result">
        <!-- <span
          :class="{
            'search-results__result-type': true,
            [result.placeTypeKey]: true
          }"
        >
          {{ result.placeTypeName }}
        </span> -->
        <div class="search-results__result-cell">
          <span class="search-results__result-name">
            {{ result.name }}
          </span>
          <span class="search-results__result-location">
            {{ result.city || result.region }}, {{ result.country }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { CarSearchData } from "../store/car-search/types";

const carSearch = namespace("carSearch");

@Component
export default class TheCarSearchResults extends Vue {
  @carSearch.Getter isLoading!: boolean;
  @carSearch.Getter hasLoaded!: boolean;
  @carSearch.Getter hasError!: boolean;
  @carSearch.Getter results!: CarSearchData;
  @carSearch.Action fetchData!: (term: string) => void;

  mounted() {
    this.fetchData("leeds");
  }
}
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
