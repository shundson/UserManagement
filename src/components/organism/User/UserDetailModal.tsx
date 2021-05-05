import {
  Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from "@chakra-ui/react";
import React, { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { User } from "../../../types/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
};
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin = false } = props;
  const onClickUpdate = () => {
    alert("aaaaaaaaaaaa");
  };
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserName}
                />
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  isReadOnly={!isAdmin}
                  onChange={onChangeName}
                />
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={onChangeEmail}
                />
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onChange={onChangePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
