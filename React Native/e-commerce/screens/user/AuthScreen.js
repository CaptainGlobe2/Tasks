import React, { useState, useEffect } from 'react'
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'

import Input from '../../components/UI/Input'
import Card from '../../components/UI/Card'
import Colors from '../../constants/Colors'
import * as authActions from '../../store/actions/auth'
import { SIGN_IN } from '../../store/actions/auth'

const AuthScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)

  const dispatch = useDispatch()

  const inputChangeHandler = (inputIdentifier, inputValue) => {
    if (inputIdentifier === 'email') {
      setEmail(inputValue)
      setEmailIsValid(inputValue.includes('@'))
    } else {
      setPassword(inputValue)
      setPasswordIsValid(inputValue.length >= 5)
    }
  }

  const authenticate = async () => {
    setError(null)
    setLoading(true)
    try {
      await dispatch(authActions.authenticate(email, password))
      // Handle successful authentication (navigation, etc.)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert('Error occurred', error, [{ text: 'OK' }])
    }
  }, [error])

  useEffect(() => {
    dispatch(authActions.restoreUser())
  }, [dispatch])

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="EMAIL"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address"
              onInputChange={(id, value) => inputChangeHandler(id, value)}
              initialValue=""
            />
            <Input
              id="password"
              label="PASSWORD"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password"
              onInputChange={(id, value) => inputChangeHandler(id, value)}
              initialValue=""
            />
            <View style={styles.authBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                <Button
                  title="Login"
                  color={Colors.primary}
                  disabled={!emailIsValid || !passwordIsValid}
                  onPress={authenticate}
                />
              )}
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  authBtnContainer: {
    marginTop: 10
  }
})

export default AuthScreen
