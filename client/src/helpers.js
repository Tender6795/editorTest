/*eslint no-useless-escape: "off"*/
export function validateEmail(email) {
  const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i
  return pattern.test(email)
}

export function validatePassword(password) {
  return password.length > 3
}

export function deleteTokenFromLocalStore() {
  localStorage.removeItem('token')
}

export function setTokenToLocalStore(token) {
  localStorage.setItem('token', token)
}

export function isLocalStoreHasToken() {
  return !!localStorage.getItem('token')
}
