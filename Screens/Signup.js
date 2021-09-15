import { Box, Center, Image, Text, Input, Button,HStack } from 'native-base';
import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';




const Login = () => {
    let id = 1;
    
    const [firstName,setFirstName] = useState('');
    
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [address,setAddress] = useState('');


    const handleSubmit = async() =>{
        if(!email || !password || !firstName || !lastName || !address || !confirmPassword)
        {
            return Alert.alert('Fill all the fields');
        }
        if(password !==confirmPassword)
        {
            return Alert.alert('Password donot match');

        }
     try
        {
            
         const res = await  auth().createUserWithEmailAndPassword(email, password);
            
        //  writing 
         database()
            .ref(`/users/${id}`)
            .set({
                name: firstName+' '+lastName,
                email: email,
                password:password,
                address:address

            })
  .then(() => console.log('Data set.'));
    id++;

        }
        catch(err)
        {
            console.log(err);
            return Alert.alert('Error in auth');
        }
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
                <Center>
                <HStack marginBottom={2}>
                    
                <Input
                        w="40%"
                        mx={3}
                        placeholder="First Name"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}

                        onChangeText={(text)=>setFirstName(text)}
                    
                    />
                    
                    <Input
                        w="40%"
                        mx={3}
                        placeholder="Last Name"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}

                        onChangeText={(text)=>setLastName(text)}
                    
                    />
      
        </HStack>

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

                    
                    <Input
                        w="90%"
                        mx={3}
                        marginTop={2}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                        
                        onChangeText={(text)=>setConfirmPassword(text)}
                    />

                    
                    <Input
                        w="90%"
                        mx={3}
                        marginTop={2}
                        placeholder="Address"
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                        
                        onChangeText={(text)=>setAddress(text)}
                    />

                    <Button 
                   
                  onPress={handleSubmit} marginTop={5} variant="outline" size="md">
                        Signup
                    </Button>

                </Center>
            </Box>


            {/* Box2  */}

        </Box>
    )
}

export default Login;
