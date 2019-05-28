export const state = () => ({
  darkMode: false
})

export const mutations = {
  SET_DARKMODE: (state, val) => (state.darkMode = val),
  ACTIVE_DARKMODE: state => (state.darkMode = true),
  REMOVE_DARKMODE: state => (state.darkMode = false)
}
