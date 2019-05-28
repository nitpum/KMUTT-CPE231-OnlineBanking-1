export const state = () => ({
  user: {
    username: 'somsukUsername',
    name: {
      firstName: 'Somsuk',
      lastName: 'Sukjai'
    },
    email: 'eiei@whatismyemail.com'
  },
  darkMode: false
})

export const mutations = {
  SET_DARKMODE: (state, val) => (state.darkMode = val),
  ACTIVE_DARKMODE: state => (state.darkMode = true),
  REMOVE_DARKMODE: state => (state.darkMode = false)
}
