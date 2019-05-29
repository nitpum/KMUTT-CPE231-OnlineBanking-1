module.exports = (len) => {
  let text = ''
  let charset = '0123456789'
  for (var i = 0; i < len; i++) { text += charset.charAt(Math.floor(Math.random() * charset.length)) }
  return text
}
