import React, { useState,useEffect } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import {LoginManager,GraphRequest,GraphRequestManager} from 'react-native-fbsdk-next'



const App = () => 
{
  const fbLogin = (resCallback) =>{
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email','public_profile']).then(
      res=>{
        if(res.declinedPermissions && res.declinedPermissions.includes('email'))
        {
          resCallback({message:'Email is required'})
        }
        if(res.isCancelled)
        {
          console.log('Error')
        }
        else
        {
          const infoRequest =  new GraphRequest(
            '/me?fields=email,name,picture,friends',
            null,
            resCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
        

      },(error)=>{
        console.log('Login failed with error : ',error);

      });  
  }
  const onfbLogin = async() =>{
    try
    {
      await fbLogin(resinfocallback)

    }
    catch(err)
    {
      console.log('Error raised',err);
    }

  }

  const resinfocallback = async(err,res) =>{
    if(err)
    {
      console.log("Error aya h",err);
      return;
    }
    else
    {
      
    const userData = res;
    console.log("===========FB Data ========== " ,userData)

    }
     
  }
   return(

  <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
    <TouchableOpacity onPress={onfbLogin}>
    <Text>FB Login</Text>
    </TouchableOpacity>
  </View>
  );

}
   



export default App
