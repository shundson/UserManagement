import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../fooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();
  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClicklogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onchangeUserId}
          />
          <PrimaryButton
            loading={loading}
            disabled={userId === ""}
            onClick={onClicklogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
