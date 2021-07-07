import React from "react";
import { GridColumn } from "@atlaskit/page";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import { Section } from "@atlaskit/menu";
import EmailIcon from "@atlaskit/icon/glyph/email";
import MobileIcon from "@atlaskit/icon/glyph/mobile";
import styled from "styled-components";
import { User } from "../models/user";
import { useUserInfoFacade } from "../hooks/use-user-info-facade";

type MobileUserInfoProps = {
  user: User;
};

export const MobileUserInfo = ({ user }: MobileUserInfoProps) => {
  const { handleGoToEditPage } = useUserInfoFacade();
  return (
    <>
      <GridColumn medium={12}>
        <AvatarContainer>
          <Button appearance="subtle" onClick={handleGoToEditPage}>
            edit
          </Button>
          <Avatar size="xlarge" src={user.avatar} />
        </AvatarContainer>
      </GridColumn>
      <GridColumn medium={12}>
        <HeaderContainer>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
        </HeaderContainer>
        <h5>{user.about}</h5>
      </GridColumn>
      <GridColumn medium={12}>
        <Section
          overrides={{ HeadingItem: { cssFn: () => ({ padding: 0 }) } }}
          title="CONTACT INFORMATION"
        >
          <Grid>
            <Button
              style={{ paddingLeft: 0 }}
              href={`mailto: ${user.email}`}
              iconBefore={<EmailIcon label="email" />}
              appearance="link"
            >
              {user.email}
            </Button>

            <Button
              style={{ paddingLeft: 0 }}
              href={`tel: ${user.phone}`}
              iconBefore={<MobileIcon label="phone" />}
              appearance="link"
            >
              {user.phone}
            </Button>
          </Grid>
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
  display: grid;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Grid = styled.div`
  display: grid;
`;
