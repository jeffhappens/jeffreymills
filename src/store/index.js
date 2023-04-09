import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu: false
  },
  getters: {
    mobileMenuState(state) {
      return state.mobileMenu
    }
  },
  mutations: {
    setMobileMenu(state, value) {
      state.mobileMenu = value
    }
  },
  actions: {
    SET_MOBILE_MENU(context, value) {
      context.commit('setMobileMenu', value)

    }
  },
  modules: {
  }
})
