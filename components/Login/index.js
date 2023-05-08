import React from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Box, Button, Link, Text, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Agendamento');
  };
  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="100%" alignItems="center">
    <Text bold color="blue.500" fontSize="35" w={{base:"75%", md:"25%"}}>Bem Vindo!</Text>
    <Text w={{base:"75%", md:"25%"}}>Entre com uma conta ou cadastre-se</Text>
      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Email" isRequired="true" />
      <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Senha" />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "blue.500"
          }} alignItems="center" mt="1">
              Esqueceu a senha?
            </Link>
    <Box alignItems="center" marginTop="5">
      <Pressable onPress={handlePress} w="260" h="60" borderRadius="20" bg='blue.500'><Text fontSize="25" textAlign="center" marginTop="2" bold>Entrar</Text></Pressable>
      <HStack mt="6" justifyContent="center" alignItems="center" space={0}>
  <Text fontSize="md" color="coolGray.900" _dark={{ color: "warmGray.200" }}>
    É um novo usuário?{" "}
  </Text>
  <Pressable onPress={handleCadastroPress}>
    <Text fontSize="md" marginTop="1" bold>
      Clique aqui
    </Text>
  </Pressable>
</HStack>
    </Box>
    </Stack>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Login />
            </Center>
          </NativeBaseProvider>
        );
    };