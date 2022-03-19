import {HStack,Center,NativeBaseProvider,VStack,IconButton,Button,Card, Text,} from "native-base";
import React,{useState} from "react";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";


export default function App() {
  const[RFID,setRFID] = useState(1)
  return (
    <NativeBaseProvider>
      <HStack safeArea width={Dimensions.get('window').width}>
        <VStack width='70%' >
          <Center>
            <HStack marginY={5} >
              <Button colorScheme="darkBlue" mx={4} rightIcon={<Ionicons color='white' size={20} name='speedometer' />}><Text color='white'>Pilot</Text></Button>
              <Button mx={4} rightIcon={<Ionicons color='white' size={20} name='airplane' />}>Auto-Pilot</Button>
            </HStack>
            <Button  marginY={5} colorScheme="yellow" rightIcon={<Ionicons color='black' size={20} name='bluetooth' />}><Text>Find RFID</Text></Button>
            <Card mt={20} width={250} >
              <Text fontWeight='bold' textAlign='center'>{`RFID ID is: ${RFID}`}</Text>
            </Card>
          </Center>
        </VStack>
        <Center width='30%' safeArea borderLeftWidth={2} borderColor='muted.300' pt='32' pb='32' >
          <IconButton icon={<Ionicons color='green' size={60}  name='chevron-up-circle' />} />
          <HStack>
            <IconButton mx={4} icon={<Ionicons color='green' size={60}   name='chevron-back-circle' />} />
            <IconButton mx={4} icon={<Ionicons color='green' size={60}  name='chevron-forward-circle'/>} />
          </HStack>
          <IconButton icon={<Ionicons color='green' size={60}  name='chevron-down-circle' />} />
        </Center>
      </HStack>
    </NativeBaseProvider>
  );
}

