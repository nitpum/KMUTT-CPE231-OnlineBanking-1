export default ({ store, redirect }) => {
  // if (!store.state.auth.loggedIn) redirect('/')
  console.log(store.state.auth.loggedIn) //eslint-disable-line
}
