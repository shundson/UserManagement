import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import React, { memo, useCallback, VFC } from "react";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { useHistory } from "react-router-dom";
export const Header: VFC = memo(() => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHome = useCallback(() => {
    history.push("/home");
  }, [history]);
  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, [history]);

  const onClickSetting = useCallback(() => {
    history.push("/home/setting");
  }, [history]);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          onClick={onClickHome}
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>

        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickHome={onClickHome}
      />
    </>
  );
});