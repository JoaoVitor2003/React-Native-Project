import React from 'react';
import {
    Text, Flex, Checkbox, HStack, Center, Heading, Select, NativeBaseProvider, extendTheme, VStack, Box, TextArea, Image, Button, CheckIcon, Stack
  } from "native-base";
  
  const Login = () => {
    const [service, setService] = React.useState("");
    return <Stack>
          <VStack alignItems="center">
            <Heading size="lg">Agendamento</Heading>
            <HStack py={5} alignItems="center" >
              <Text>Mas antes de agendar, qual o nome do seu PET?</Text>
            </HStack>
          </VStack>
          <Flex direction="row">
                <Flex direction="row">              
                <Image source={{
        uri: "https://i.pinimg.com/736x/36/a3/5b/36a35bcd2d89055a3a85fc00c30604f1.jpg"}} alt="Cachorro" size="md" borderRadius={100}/></Flex>
          <Box w="70%" py={5} alignItems="center">
        <TextArea placeholder="Nome do PET" w="70%" h="30"></TextArea>
          </Box>
          </Flex>
              <VStack alignItems="center" py={2}>
          <Text>Para seguir com o agendamento escolha qual será o serviço que será prestado:
          </Text>
              </VStack>
              <Center>
              <HStack >
          <Flex direction="column" py={2}>
          <Flex direction="row" py={2} px={2} borderWidth="2" borderColor="coolGray.300" borderRadius="5">
        <Checkbox value="banho" accessibilityLabel="This is a dummy checkbox"/>
        <Text px={2}>Banho</Text>
        </Flex>
        <Flex direction="row" py={2} px={2} borderWidth="2" borderColor="coolGray.300" borderRadius="5">
        <Checkbox value="banhot" accessibilityLabel="This is a dummy checkbox"/>
        <Text px={2}>Banho & Tosa</Text>
        </Flex>
        <Flex direction="row" py={2} px={2} borderWidth="2" borderColor="coolGray.300" borderRadius="5">
        <Checkbox value="banhoth" accessibilityLabel="This is a dummy checkbox"/>
        <Text px={2}>Banho & Tosa Higiênica</Text>
        </Flex>
        </Flex>      
      </HStack>
      <VStack>
        <Text py={2}>Qual o melhor dia para podermos agendar?</Text>
        <Box w="100%" alignItems="center">
        <TextArea placeholder='DD/MM/YYYY' w="40%" h="30"></TextArea>
        <Box py={2}/>
        <Box maxW="150" alignSelf="center">
          <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Escolha o melhor horário !" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="10:00" value="dez" />
            <Select.Item label="12:00" value="doze" />
            <Select.Item label="14:00" value="quatorze" />
            <Select.Item label="16:00" value="dezesseis" />
          </Select>
        </Box>
        </Box>
        <Box py={4} alignSelf="center"/>
        <Button _text={{color: "primary.100",
      fontSize: "md",
      fontWeight: "bold",
      }} onPress={() => console.log("")} >Agendar</Button>
      </VStack>
      </Center>
      </Stack>
  }

  export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <Login />
        </Center>
      </NativeBaseProvider>
        );
    };
