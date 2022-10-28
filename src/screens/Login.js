import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Login(props) {

    const [email, onChangeEmail] = useState('Email')
    const [password, onChangePassword] = useState('Password')
    const [visibility, setVisibility] = useState(true)
  return (
    <View style={styles.local_container}>
        <View style={styles.logo_container}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/icon.png')}
            />
        </View>
      <View style={styles.heading_container}>
        <Text style={styles.heading}>
            Welcome to MyHealth.
        </Text>
      </View>
      <View style={styles.inputs_container}>
        <TextInput
        style={styles.text_input}onChangeEmail
        keyboardType='email-address'
        placeholder='Email'
        onChangeText={onChangeEmail}
        autoCorrect={true}
        />
        <TextInput 
        style={styles.text_input}
        secureTextEntry={(visibility)}
        placeholder='Password'
        onChangeText={onChangePassword}
        />
      </View>
      <View style={[styles.text_container]}>
        <Text style={styles.pressable_text}>
            Forgot Password?
        </Text>
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={() => {}}>
        <Text style={styles.button_title}>
            Sign In
        </Text>
      </TouchableOpacity>
      <View style={[styles.text_container]}>
        <Text>
            Don't have an account? 
        </Text>
        <View>
            <Text style={styles.pressable_text}>
                Sign up.
            </Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    local_container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 236,
        height: 154,
        marginTop: 75,
    },
    heading_container: {},
    inputs_container: {},
    text_input: {},
    text_container: {},
    button: {},
    button_title: {},
    

})