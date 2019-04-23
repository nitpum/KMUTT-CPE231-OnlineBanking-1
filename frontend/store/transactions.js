export const state = () => ({
  tabs: ['2019/09', '2019/10', '2019/11', '2019/12']
})

export const getters = {
  tabs: state => state.tabs,
  latest: state => state.tabs[state.tabs.length - 1]
}
