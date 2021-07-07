import Avatar from "@atlaskit/avatar";
import React from "react";
import { Section } from "@atlaskit/menu";
import { GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import EmailIcon from "@atlaskit/icon/glyph/email";
import MobileIcon from "@atlaskit/icon/glyph/mobile";
import styled from "styled-components";
import { User } from "../models/user";
import { useUserInfoFacade } from "../hooks/use-user-info-facade";
import { MobileUserInfo } from "./mobile-user-info";

type UserInfoProps = {
  user: User;
};

export const UserInfo = ({ user }: UserInfoProps) => {
  const { handleGoToEditPage, isMobile } = useUserInfoFacade();
  if (isMobile) {
    return <MobileUserInfo user={user} />;
  }
  return (
    <>
      <GridColumn medium={3}>
        <AvatarContainer>
          <Avatar size="xxlarge" src={user.avatar} />
        </AvatarContainer>
      </GridColumn>
      <GridColumn medium={8}>
        <HeaderContainer>
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <Button appearance="subtle" onClick={handleGoToEditPage}>
            edit
          </Button>
        </HeaderContainer>
        <h4>{user.about}</h4>
      </GridColumn>
      <GridColumn medium={3} />
      <GridColumn medium={8}>
        <Section
          overrides={{ HeadingItem: { cssFn: () => ({ padding: 0 }) } }}
          title="CONTACT INFORMATION"
        >
          <Button
            style={{ paddingLeft: 0 }}
            href={`mailto: ${user.email}`}
            iconBefore={<EmailIcon label="email" />}
            appearance="link"
          >
            {user.email}
          </Button>

          <Button
            href={`tel: ${user.phone}`}
            iconBefore={<MobileIcon label="phone" />}
            appearance="link"
          >
            {user.phone}
          </Button>
        </Section>
        <Section
          overrides={{ HeadingItem: { cssFn: () => ({ padding: 0 }) } }}
          title="BASIC INFORMATION"
        >
          <p>
            <strong>Birthday:</strong>
          </p>
          <p>{user.birthday}</p>
        </Section>
      </GridColumn>
    </>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
