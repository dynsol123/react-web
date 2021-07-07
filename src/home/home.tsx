import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

export const Home = () => {
  return (
    <Page>
      <Grid>
        <GridColumn medium={12}>
          <h1>Home page</h1>
        </GridColumn>
      </Grid>
    </Page>
  );
};
