import React from "react";
import {
  Content,
  Main,
  PageLayout,
  TopNavigation,
} from "@atlaskit/page-layout";
import styled from "styled-components";
import { Grid, GridColumn } from "@atlaskit/page";
import { TopBar } from "./components/top-bar";

type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => (
  <PageLayout>
    <TopNavigation isFixed id="navigation" skipLinkTitle="Navigation">
      <TopBar />
    </TopNavigation>
    <Content testId="content">
      <Div>
        <Main id="main-content" skipLinkTitle="Main Content">
          <Container>{children}</Container>
        </Main>
        <Footer id="main-footer">
          <Grid layout="fluid">
            <GridColumn />
            <GridColumn medium={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut ipsum molestie, sagittis tellus eu, vehicula
              tortor.
            </GridColumn>
            <GridColumn />
          </Grid>
        </Footer>
      </Div>
    </Content>
  </PageLayout>
);

const Container = styled.div`
  margin-top: 8px;
`;

const Div = styled.div`
  display: grid;
  grid-template-rows: minmax(calc(100vh - 56px - 120px - 32px), 1fr) max-content;
`;

const Footer = styled.footer`
  display: grid;
  height: 120px;
  align-items: center;
  background-color: #f4f5f7;
  margin-top: 32px;
  width: 100vw;
`;
