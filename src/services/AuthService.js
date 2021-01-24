import store from '../store'
import { http } from './HttpService'
import jwt from 'jsonwebtoken'
// 3
export function IsLogin () {
  const token = localStorage.getItem('token')
  return token != null
}
// 1
export function Login (user) {
  return http().post('/auth', user)
    .then(res => {
      if (res) {
        console.log(res)
        // const fakeToken = {
        //   token: 'my-token'
        // }
        setToken(res.data.token)
      }
    })
}

export function logout () {
  localStorage.clear()
  store.dispatch('authenticate')
}

// 2
function setToken (token) {
  localStorage.setItem('token', token)
  store.dispatch('authenticate')
}

export function getToken () {
  return localStorage.getItem('token')
}

export function GetUsername () {
  // return 'david'
  const token = decodeToken()
  if (!token) {
    return null
  }
  return token.user.username
}

export function GetuserId () {
  // return 1
  const token = decodeToken()
  if (!token) {
    return null
  }
  return token.user.id
}

export function registerUser (user) {
  return http().post('/register', user)
}

function decodeToken () {
  const token = getToken()
  if (!token) {
    return null
  }
  return jwt.decode(token)
}
