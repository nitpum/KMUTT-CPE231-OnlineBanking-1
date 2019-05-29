export default ({ store, redirect }) => {
  if (!store.state.auth.loggedIn || store.state.auth.strategy !== 'manager') {
    redirect('/manager/login')
  } else {
    const { username, name, email } = store.state.auth.user
    store.commit('SET_USER', {
      username,
      name,
      email
    })
  }
}
