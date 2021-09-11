import React, { useState,useEffect } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import auth from '@react-native-firebase/auth';
import Login from './Login'
import Home from "./Home";

const App = () => 
{
  const [user,setUser] = useState('');
  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      if(user)
      {
        setUser(user);
      }
      else
      {
        setUser("");
      }
    })
    console.log(user.email);
  },[]);

  if(user)
  {
    
  return(
    <Home />
  );
  }

  return(
    <Login />
  )

  }
   



export default App
