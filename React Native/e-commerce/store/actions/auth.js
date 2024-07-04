import AsyncStorage from '@react-native-community/async-storage'

export const SIGN_IN = 'SIGN_IN'
export const RESTORE_USER = 'RESTORE_USER'
export const LOGOUT = 'LOGOUT'

export const restoreUser = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem('userData')
    if (!userData) {
      return
    }
    const transformedData = JSON.parse(userData)
    const { email } = transformedData

    dispatch({ type: RESTORE_USER, email })
  }
}

export const authenticate = (email, password) => {
  return async (dispatch) => {
    const isValid = validateCredentials(email, password)

    if (!isValid) {
      throw new Error('Invalid email or password')
    }

    dispatch({
      type: SIGN_IN,
      email
    })

    saveDataToStorage(email)
  }
}

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('userData')
    dispatch({ type: LOGOUT })
  }
}

const saveDataToStorage = (email) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({ email })
  )
}

const validateCredentials = (email, password) => {
  return email === 'test@test.com' && password === 'password'
}
