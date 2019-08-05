// profile/getters.ts
import { GetterTree } from "vuex";
import { CarSearchState, CarSearchData } from "./types";

export const getters: GetterTree<CarSearchState, {}> = {
  isLoading(state): boolean {
    return state.loading === "Loading";
  },

  hasLoaded(state): boolean {
    return state.loading === "Success";
  },

  hasError(state): boolean {
    return state.loading === "Error";
  },

  results(state): CarSearchData | [] {
    return state.data || [];
  }
};
