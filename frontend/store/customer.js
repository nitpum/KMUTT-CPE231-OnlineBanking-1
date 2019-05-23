export const state = () => ({
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
})

export const getters = {
  accounts: state => state.accounts,
  currentAcc: state => state.accounts[state.current]
}

export const mutations = {
  SWITCH_TO(state, index) {
    state.current = index
  }
}

export const actions = {
  switchTo({ commit }, index) {
    commit('SWITCH_TO', index)
  }
}
