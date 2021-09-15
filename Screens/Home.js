import React,{useEffect,useState} from 'react';
import { Text, View } from 'react-native';
import database from '@react-native-firebase/database';


const Home = ({route}) => {

    const [user,setUser]=useState('');

    useEffect(() => {


  database()
  .ref('/users').orderByChild("email").equalTo(route.params.data.user.email).once('value', snapshot => {

    console.log('User data: ', snapshot.val());
    setUser(snapshot.val());
  });



        console.log('Home useeffect');
        console.log('USer ========> '+user[1].name);
        console.log(route.params.data.user);
        
    }, []);
    return (
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <Text>{route.params.data.user.email}</Text>
            <Text>{user[1].name}</Text>

        </View>
    )
}

export default Home
