export const state = () => ({
  user: {
    username: '',
    name: {
      firstName: '',
      lastName: ''
    },
    email: ''
  },
  darkMode: false
})

export const mutations = {
  SET_DARKMODE: (state, val) => {
    state.darkMode = val
    document.cookie = `dark=${val}; path=/`
  },
  RECOVER_DARKMODE: (state, val) => (state.darkMode = val),
  ACTIVE_DARKMODE: state => (state.darkMode = true),
  REMOVE_DARKMODE: state => (state.darkMode = false),
  SET_USER: (state, user) => (state.user = user),
  UPDATE_USERNAME: (state, username) => (state.user.username = username)
}
