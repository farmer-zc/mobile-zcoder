import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user.js'
import product from './modules/product.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING (state, status) {
      state.loading = status
    }
  },
  actions: {
    setLoading ({commit}, status) {
      commit('SET_LOADING', status)
    }
  },
  modules: {
    user,
    product
  }
});
