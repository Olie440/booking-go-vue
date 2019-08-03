import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { CarSearchState } from "./types";

export const state: CarSearchState = {
  loading: "None",
  data: null
};

const namespaced: boolean = true;

export const carSearch: Module<CarSearchState, {}> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
