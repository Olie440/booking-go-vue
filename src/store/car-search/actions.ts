import { ActionTree } from "vuex";
import { CarSearchState, CarSearchData } from "./types";

export const actions: ActionTree<CarSearchState, {}> = {
  fetchData({ commit }, term: string, rows: number = 4) {
    commit("actions/dataRequested");

    return fetch(
      `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${rows}&solrTerm=${term}`
    )
      .then(response => response.json())
      .then(data => {
        const payload: CarSearchData = data.results.docs;
        commit("carSearch/dataReceived", payload);
      })
      .catch(() => {
        commit("carSearch/dataRequestFailed");
      });
  }
};
