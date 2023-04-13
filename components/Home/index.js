import React from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Box, Button, Link, Text, HStack, View, Image, ScrollView} from "native-base";
import { useNavigation } from '@react-navigation/native';


const HomePag = () => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('Login');
    };
  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="100%" alignItems="center">

    <ScrollView>
    <View alignItems="center">
    <Text marginTop="-5">{'\n'}</Text>
    <Image source={require('../../assets/logo-removebg-preview.png')} size="150"  alt="Logo"/>
    <Text marginTop="110" fontSize="35" color="blue.500" textAlign="center" bold style='styles.paragraph'>Nós somos a equipe mais pet !  {'\n'} </Text>
    <Text fontSize="20"color="gray.600" style='styles.paragraph' >  Estamos em vigor desde 2020, sempre com profissionais, hoje nossa equipe está com 5
        pessoas porém em crescimento como qualquer outra start-up, amamos pets e por isso decidimos 
        cuidar daquilo que gostamos, vai ser um prazer cuidar do seu, vamos conhecer mais? 
    
        {'\n'}{'\n'}</Text>
        <Pressable onPress={handlePress} padding="15" marginBottom="230" borderRadius="25" bgColor="blue.500"><Text fontSize="20" bold>Vamos lá</Text></Pressable>
    </View>
    <View>
        <Text textAlign="center" marginTop="10" color='blue.500' fontSize="35" bold style='styles.paragraph'> Sobre  {'\n'}   
         </Text> 
        <Text textAlign="center" fontSize="20"color="gray.600" style='styles.paragraph' >  Hoje nós trabalhamos com um modelo diferenciado de planos,
onde o cliente pode escolher qual plano se encaixa melhor para seu pet e já deixando previamente agendado 
os dias que o seu pet irá vir para o procedimento conforme sua agenda.

{'\n'}{'\n'}</Text>
</View>
    <View alignItems="center">
    <Text paddingTop="40">{'\n'}</Text>    
    <Image source={require('../../assets/icons8-banho-94.png')} alt="Banho"/>
        <Text marginTop="15" fontSize="25" bold style='styles.paragraph'> Banho R$40,00 </Text>

        <Text marginTop="15" textAlign="center" fontSize="20"color="gray.600" style='styles.paragraph' > Nesse pacote está incluso 
        um banho completo mensal, com todo carinho que seu pet merece. 
{'\n'}{'\n'}</Text>
    <Button marginBottom="20" borderRadius="25" fontSize="20" bgColor="blue.500"><Text fontSize="20" bold>Assinar</Text></Button>
</View>

<View alignItems="center">
<Text paddingTop="40">{'\n'}</Text> 
<Image source={require('../../assets/cortetosa.jpeg')}  alt="CorteTosa"/>
<Text marginTop="15" fontSize="25" bold style='styles.paragraph'> Banho e tosa R$ 60,00  </Text>

        <Text marginTop="15" textAlign="center" fontSize="20"color="gray.600" style='styles.paragraph' >Nesse pacote está incluso 
    um banho & tosa completo, seu pet já sai com pelo hidratado e tosado. 

{'\n'}{'\n'}</Text>
    <Button marginBottom="40" borderRadius="25" fontSize="20" bgColor="blue.500"><Text fontSize="20" bold>Assinar</Text></Button>
</View>
<View alignItems="center">
<Text paddingTop="40">{'\n'}</Text> 
<Image source={require('../../assets/combo.jpeg')}  alt="Combo"/>
<Text marginTop="15" fontSize="25" bold style='styles.paragraph'> Pacote Premium R$ 110,00  </Text>
        <Text marginTop="15" textAlign="center" fontSize="20"color="gray.600" style='styles.paragraph' > Esse pacote é exclusivo para 
        você que quer ser um cliente fixo, além de ser um preço mais atrativo o seu pet tem direito 
        a 4 banhos no mês e 1 tosa, ótima oportunidade para os peludos de plantão! 

{'\n'}{'\n'}
</Text>
    <Button marginBottom="30" borderRadius="25" fontSize="20" bgColor="blue.500"><Text fontSize="20" bold>Assinar</Text></Button>
</View>
    </ScrollView>
    </Stack>;
};

export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="5">
                <HomePag />
            </Center>
          </NativeBaseProvider>
        );
    };