import { MutationTree } from "vuex";
import { CarSearchState, CarSearchData } from "./types";

export const mutations: MutationTree<CarSearchState> = {
  dataRequested(state) {
    state.loading = "Loading";
    state.data = null;
  },

  dataReceived(state, payload: CarSearchData) {
    state.loading = "Success";
    state.data = payload;
  },

  dataRequestFailed(state) {
    state.loading = "Error";
    state.data = null;
  }
};
