export const state = () => ({
  left_menu: [],
  right_menu: []
})

export const mutations = {
  SET_LEFT: (state, val) => (state.left_menu = val),
  SET_RIGHt: (state, val) => (state.right_menu = val)
}
