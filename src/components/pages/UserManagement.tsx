import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import React, { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organism/User/UserCard";
import { useAllUsers } from "../../fooks/useAllUsers";
import { useSelectUsers } from "../../fooks/useSelectUsers";
import { useLoginUser } from "../../fooks/UseLoginUser";
import { UserDetailModal } from "../organism/User/UserDetailModal";

export const UserManegement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUsers();

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isAdmin={loginUser?.isAdmin}
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});
