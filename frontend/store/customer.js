export default {
  namespaced: true,
  state: () => ({
    accounts: [
      {
        id: '000-0-00000-0',
        type: 'Saving account'
      },
      {
        id: '000-0-00000-2',
        type: 'Saving account'
      }
    ],
    current: 0
  }),
  getters: {
    accounts: state => state.accounts,
    currentAcc: state => state.accounts[state.current]
  },
  mutations: {
    SWITCH_TO(state, index) {
      state.current = index
    }
  },
  actions: {
    switchTo({ commit }, index) {
      commit('SWITCH_TO', index)
    }
  }
}
