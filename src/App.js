import { Flex, Heading, Button, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'

function App() {
  const name = 'Alex';
  const {toggleColorMode} = useColorMode();
  const formBackground = useColorModeValue("gray.100")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" p={12} rounded={6} background={formBackground}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder='astephbi@gmail.com' variant="filled" mb={3} type="email"/>
        <Input placeholder='************' variant="filled" mb={6} type='password'/>
        <Button mb={6} colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}> Toggle Color Mode </Button>


      </Flex>
    </Flex>
  );
}

export default App;
