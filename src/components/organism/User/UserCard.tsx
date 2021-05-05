import { Box, Stack, Image, Text } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  onClick: (id: number) => void;
  fullName: string;
};
export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick, id } = props;
  return (
    <Box
      w="260px"
      p={4}
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
