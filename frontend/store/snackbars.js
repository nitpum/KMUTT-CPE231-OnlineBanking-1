export const state = () => ({
  show: false,
  text: '',
  color: null,
  timeout: 6000
})

export const mutations = {
  SHOW: state => (state.show = true),
  CLOSE: state => (state.show = false),
  COLOR: (state, payload) => (state.color = payload),
  TEXT: (state, payload) => (state.text = payload)
}

export const actions = {
  show({ commit }, text) {
    commit('SHOW', true)
    commit('COLOR', null)
    commit('TEXT', text)
  },
  success({ commit }, text) {
    commit('SHOW', true)
    commit('COLOR', 'success')
    commit('TEXT', text)
  },
  error({ commit }, text) {
    commit('SHOW', true)
    commit('COLOR', 'error')
    commit('TEXT', text)
  },
  color({ commit }, text) {
    commit('SHOW', true)
    commit('COLOR', 'error')
    commit('TEXT', text)
  }
}
