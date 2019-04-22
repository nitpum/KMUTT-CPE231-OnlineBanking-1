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
    currentAcc: state => state.accounts[state.current]
  }
}
