import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import auth from '@react-native-firebase/auth';


import React, { useState } from 'react';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

 const submitSignup = async () => {
   if(!email || !password)
   {
    return Alert.alert('Fill all the fields');
     
   }

   try 
   {
     
      const res = await auth().signInWithEmailAndPassword(email,password);
      console.log("==============="+res.user);
  }
  catch(err)
  {
    Alert.alert('Something went wrong');
  }

  }
  return (
    
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',flex:1}}>
        <TextInput onChangeText={(text=>setEmail(text))} placeholder="Enter Item" style={{backgroundColor:'grey',borderWidth:1,borderColor:'black',color:'black',width:200 }} />
        <TextInput onChangeText={(text=>setPassword(text))} placeholder="Enter Item" style={{backgroundColor:'grey',borderWidth:1,borderColor:'black',color:'black',width:200 }} />

        <TouchableOpacity onPress={submitSignup} style={{marginTop:20}}>
          <Text>Login</Text>
        </TouchableOpacity>
        
      </View>
  )
}

export default Login;
