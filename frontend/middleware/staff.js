export default ({ store, redirect }) => {
  if (!store.state.auth.loggedIn || store.state.auth.strategy !== 'staff') {
    // redirect('/')
  }
}