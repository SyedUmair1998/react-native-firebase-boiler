import { Box, Center, Image, Text, Input, Button } from 'native-base';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = () =>{
        if(!email || !password)
        {
            return Alert.alert('Fill all the fields');
        }
        auth().signInWithEmailAndPassword(email,password)
        .then(
            (res)=>{
                console.log(res);
                navigation.replace('Home',{data:res});
            })
        .catch(err=>console.log(err));

    }
    return (

        <Box flex={1} bg="#fff1f2">

            {/* Div 1  */}
            <Box flex={1}>
                <Center marginTop={5}>
                    <Image
                        source={{
                            uri: "https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png",
                        }}
                        alt="Alternate Text"
                        size={"lg"}
                    />
                    <Text marginTop={1} fontSize="3xl">Medium</Text>
                    <Text color="grey" marginTop={1} fontSize="md">A start where dreams started to come true.</Text>

                </Center>
            </Box>

            {/* Div 1  */}

            {/* Box2  */}

            <Box flex={2}>
                <Center flex={1}>

                    <Input
                        w="90%"
                        mx={3}
                        placeholder="Enter Email"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}

                        onChangeText={(text)=>setEmail(text)}
                    
                    />
                    <Input
                        w="90%"
                        mx={3}
                        marginTop={2}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                        
                        onChangeText={(text)=>setPassword(text)}
                    />

                    <Button 
                   
                  onPress={handleSubmit} marginTop={5} variant="outline" size="md">
                        Login
                    </Button>
                    <TouchableOpacity>
                        <Text marginTop={5} color="grey">Forgot password ? </Text>
                    </TouchableOpacity>

                </Center>
            </Box>


            {/* Box2  */}

            <Box flex={1}>
                <Box flex={2} >
                    <TouchableOpacity>
                        <SocialIcon
                            title='Login In With Facebook'
                            button
                            type='facebook'
                        />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SocialIcon
                            title='Login In With Gmail'
                            button
                            type='google'
                        />
                    </TouchableOpacity>
                </Box>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text color="grey" textAlign="right" margin={3}>Dont have an account?</Text>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

export default Login;
