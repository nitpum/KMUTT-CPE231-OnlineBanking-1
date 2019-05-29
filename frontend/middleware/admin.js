export default ({ store, redirect }) => {
  if (!store.state.auth.loggedIn || store.state.auth.strategy !== 'admin') {
    redirect('/admin/login')
  } else {
    const { username, email } = store.state.auth.user
    store.commit('SET_USER', {
      username,
      name: {
        firstName: username,
        lastName: ''
      },
      email
    })
  }
}
