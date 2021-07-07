import React from "react";
import Page, { Grid } from "@atlaskit/page";
import styled from "styled-components";
import { UserProfile } from "../components/user-profile";

export const UserProfileView = () => {
  return (
    <Page>
      <Container>
        <Grid>
          <UserProfile />
        </Grid>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  &&& {
    margin-top: 16px;
  }
`;
