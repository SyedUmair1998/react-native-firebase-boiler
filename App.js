import { Text, TextInput, TouchableOpacity, View } from "react-native";
import auth from '@react-native-firebase/auth';


import React, { useState } from 'react';
const App = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

 const submitSignup = async () => {
 const res = await auth().createUserWithEmailAndPassword(email,password);
console.log("==============="+res.user);

  }
  return (
    
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',flex:1}}>
        <TextInput onChangeText={(text=>setEmail(text))} placeholder="Enter Item" style={{borderWidth:1,borderColor:'black',color:'black',width:200 }} />
        <TextInput onChangeText={(text=>setPassword(text))} placeholder="Enter Item" style={{borderWidth:1,borderColor:'black',color:'black',width:200 }} />

        <TouchableOpacity onPress={submitSignup} style={{marginTop:20}}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        
      </View>
  )
}

export default App
