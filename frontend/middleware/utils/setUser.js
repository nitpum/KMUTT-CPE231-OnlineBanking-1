export default store => {
  const { username, email, name, _id } = store.state.auth.user
  store.commit('SET_USER', {
    _id,
    username,
    name: name || {
      firstName: username,
      lastName: ''
    },
    email
  })
}
