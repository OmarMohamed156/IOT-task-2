import {HStack,Center,NativeBaseProvider,VStack,IconButton,Button,Card, Text,Image} from "native-base";
import React,{useState,useEffect} from "react";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import { Video } from "expo-av";


export default function App() {
  const[RFID,setRFID] = useState(1)
  const[socketMessage,setSocketMessage]=useState('')
  var ws = new WebSocket('ws://');
  ws.onopen(()=>console.log('soccet connection opened'))
  ws.onclose(()=> console.log('connection closed'))
  ws.onmessage((msg)=> setSocketMessage(msg) )
  ws.onerror(()=>console.log('there was an error'))
  const sendSocketMessage=(msg)=>{
    ws.OPEN ? ws.send(msg): console.log('the socket is not connected, please reconnect')
  }
  return (
    <NativeBaseProvider>
      <HStack safeArea width={Dimensions.get('window').width}>
      <Center width='30%' safeArea borderLeftWidth={2} borderColor='muted.300' pt='32' pb='32' >
          <IconButton onPress={()=> ws.send('UP')} icon={<Ionicons color='green' size={60}  name='chevron-up-circle' />} />
          <HStack>
            <IconButton onPress={()=> ws.send('RIGHT')} mx={4} icon={<Ionicons color='green' size={60}  name='chevron-forward-circle'/>} />
            <IconButton onPress={()=> ws.send('LEFT')} mx={4} icon={<Ionicons color='green' size={60}   name='chevron-back-circle' />} />
          </HStack>
          <IconButton onPress={()=> ws.send('DOWN')} icon={<Ionicons color='green' size={60}  name='chevron-down-circle' />} />
        </Center>
        <VStack width='70%' >
          <Center>
            <HStack marginY={5} >
              <Button onPress={sendSocketMessage('PILOT')} colorScheme="darkBlue" mx={4} rightIcon={<Ionicons color='white' size={20} name='speedometer' />}><Text color='white'>Pilot</Text></Button>
              <Button onPress={sendSocketMessage('AUTOPILOT')} mx={4} rightIcon={<Ionicons color='white' size={20} name='airplane' />}>Auto-Pilot</Button>
            </HStack>
            <Button  marginY={5} colorScheme="yellow" rightIcon={<Ionicons color='black' size={20} name='bluetooth' />}><Text>Find RFID</Text></Button>
            <Card mt={20} width={250} >
              <Text fontWeight='bold' textAlign='center'>{`RFID ID is: ${RFID}`}</Text>
            </Card>
          </Center>
        </VStack>

      </HStack>
    </NativeBaseProvider>
  );
}

