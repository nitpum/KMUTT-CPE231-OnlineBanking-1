export default store => {
  const { username, email, name } = store.state.auth.user
  store.commit('SET_USER', {
    username,
    name: name || {
      firstName: username,
      lastName: ''
    },
    email
  })
}
