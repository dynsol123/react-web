import { ContentProps } from "@atlaskit/popup";
import { useHistory } from "react-router";
import { ButtonItem, MenuGroup, Section } from "@atlaskit/menu";
import React from "react";

type UserPopupContentProps = ContentProps & {
  onClose?: () => void;
};
export const UserPopupContent = ({ onClose }: UserPopupContentProps) => {
  const history = useHistory();
  const handleClickUserProfile = () => {
    history.push("/user-profile");
    onClose?.();
  };
  return (
    <MenuGroup>
      <Section title="Settings">
        <ButtonItem onClick={handleClickUserProfile}>User Profile</ButtonItem>
      </Section>
      <Section hasSeparator>
        <ButtonItem onClick={onClose}>Log out</ButtonItem>
      </Section>
    </MenuGroup>
  );
};
