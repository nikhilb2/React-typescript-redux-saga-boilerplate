import jsCookie from 'js-cookie'

export const login = details => {
  jsCookie.set('user', JSON.stringify(details.data))
  jsCookie.set('jwt', JSON.stringify(details.jwt))
}

export const saveLocation = details => {
  details.time = new Date()
  console.log(details)
  jsCookie.set('saveLocation', JSON.stringify(details))
}

export const saveCity = details => {
  jsCookie.set('city', JSON.stringify(details))
}

export const saveCityId = details => {
  jsCookie.set('cityId', JSON.stringify(details))
}

export const currentSession = () => {
  const user = jsCookie.get('user')
  return user ? JSON.parse(user) : null
}

export const getLocation = () => {
  const location = jsCookie.get('saveLocation')
  console.log(location)
  return location ? JSON.parse(location) : null
}

export const getCity = () => {
  const city = jsCookie.get('city')
  return city ? JSON.parse(city) : null
}

export const getCityIdFromCookies = () => {
  const cityId = jsCookie.get('cityId')
  return cityId ? JSON.parse(cityId) : null
}

export const getJwt = () => {
  const jwt = jsCookie.get('jwt')
  return jwt ? JSON.parse(jwt) : null
}

export const logout = () => {
  jsCookie.remove('user')
  jsCookie.remove('jwt')
}
