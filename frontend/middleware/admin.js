import setDark from './utils/setDark'
import setUser from './utils/setUser'

export default ({ store, redirect, req }) => {
  setDark({ store, req })
  if (!store.state.auth.loggedIn || store.state.auth.strategy !== 'admin') {
    redirect('/admin/login')
  } else {
    setUser(store)
  }
}
