import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./layout/layout";
import { UserProfileView } from "./user-profile/views/user-profile-view";
import { Home } from "./home/home";
import { EditUser } from "./user-profile/views/edit-user";

export const Main = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Switch>
            <Route path="/edit-user">
              <EditUser />
            </Route>
            <Route path="/user-profile">
              <UserProfileView />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
