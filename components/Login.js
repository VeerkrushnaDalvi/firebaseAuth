import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import { auth, db } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignIn= async(email,password) =>{
        try{
            await auth.signInWithEmailAndPassword(email,password);
            alert("Login Success! ");
            navigation.navigate('Home');

        }catch(error){
            console.log(error.message);
            alert("⚠️ "+ error.message);
        }
    }

    const onPressSignIn = () => {
        handleSignIn(email, password);
        // const user ={
        //     email:email,
        //     name:name
        // }
    };

  return (
    <KeyboardAvoidingView  
     style={styles.container}
     behavior='padding'
    >

    <View style={styles.inputContainer}>
              <Text style={{ fontSize: 30, color: '000', textAlign: 'center' }}>Login Page</Text>

      {/* <Text>Login</Text>     */}
      <TextInput
        placeholder='Enter email'
        // value={}
        onChangeText={text=>setEmail(text)}
        style={styles.input}
        keyboardType='email-address'

      />
      <TextInput
        placeholder='Enter password'
        // value={}
        onChangeText={text=>setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
              <TouchableOpacity onPress={onPress = () => navigation.navigate('Register')} > 
              {/* style={[styles.button, styles.buttonOutline]} */}
            <Text style={[styles.buttonOutlineText, styles.temp]}>Don't have account? Register</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        width:'80%',


    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
    },
    button:{
        backgroundColor:'#0782F9',
        width:'90%',
        // height:'20%',
        padding:15,
        borderRadius:10,

    },
    buttonContainer:{
        width:"60%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2,
    },
    buttonOutlineText:{
        color:'#0782F9',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    },
    temp:{
        margin:20,
        textDecorationLine:'underline',
        fontSize:15,
    }
})