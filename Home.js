import React from 'react'
import { View,Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = () => {
    console.log(auth().currentUser.email);
    return (
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text>{auth().currentUser.email}</Text>
            <Button title="Logout" onPress = {()=>{
                auth().signOut();

            }} />
        </View>
    )
}

export default Home
