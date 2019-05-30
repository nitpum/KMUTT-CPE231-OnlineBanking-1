export default ({ store, req }) => {
  let cookie = ''
  if (req && req.headers) {
    cookie = req.headers.cookie
  } else {
    cookie = document.cookie
  }
  const dark = cookie
    .split('; ')
    .map(cookie => new RegExp('(.*)=(.*)').exec(cookie))
    .filter(cookie => cookie[1] === 'dark')
  if (dark[0]) {
    store.commit('RECOVER_DARKMODE', Boolean(dark[0][2]))
  }
}
