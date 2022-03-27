import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps{
  showProfileData?:boolean;
}

export function Profile({showProfileData = true}:ProfileProps){
  return(
    <Flex
    align="center"
  >
    {showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>Anders Leite</Text>
      <Text
        color="gray.300"
        fontSize="small">
          anderssz07@gmail.com
      </Text>
    </Box>
    )}

    <Avatar size="md" name="Anderson Leite" src="https://github.com/andersjay.png"/>
  </Flex>
  );

}