import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
// import React, { useState } from 'react'
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { auth, db } from '../firebase';
// import app from '../firebase-config';
 
// import 'firebase/compat/firestore';
// import firestore from '@react-native-firebase/firestore';

// import { addDoc,getFirestore, setDoc, doc,collection } from 'firebase/firestore';

const RegistrationForm = () => {
  
  // const ref = app.firestore.collection('nativeDbCollection');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('')
  const navigation = useNavigation();

  const handleSignUp = async (name,phone,email, password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // console.log(user);
      // console.log(user.toJSON());
      console.log(`Name: ${name}   email: ${email}, ph_no:${phone}`);
      
      // Add the user cred into collection or db
      // await db.collection('users').doc(user.uid).set({
      //   name:name,
      //   email:email,
      //   ph_no:phone,
      // });
      alert(`Hey ${name} 👋 Account created successfully!`);
      navigation.navigate("Home");

    } catch (error) {
      console.log(error.message);
      alert("⚠️ " + error.message);
    }
  }

  const onPressSignUp = () => {
    handleSignUp(name,phone,email, password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >

      <View style={styles.inputContainer}>
        <Text style={{fontSize:30, color:'000', textAlign:'center'}}>Registeration Page</Text>
        {/* <Text>Login</Text>     */}
        <TextInput
          placeholder='Enter name'
          // value={}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter email'
          // value={}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Enter phone number'
          // value={}
          onChangeText={text => setPhone(text)}
          style={styles.input}
          keyboardType='phone-pad'
          maxLength={10}
        />
        <TextInput
          placeholder='Enter password'
          // value={}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      {/* </TouchableOpacity> */}
      <TouchableOpacity onPress={onPress = () => navigation.navigate('Login')} >
        {/* style={[styles.button, styles.buttonOutline]} */}
        <Text style={[styles.buttonOutlineText, styles.temp]}>Go to login page ➡️</Text>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegistrationForm;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',


  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '90%',
    // height:'20%',
    padding: 15,
    borderRadius: 10,

  },
  buttonContainer: {
    width: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  temp: {
    margin: 20,
    textDecorationLine: 'underline',
    fontSize: 15,
  }
})