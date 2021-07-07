import React from "react";
import { AtlassianNavigation } from "@atlaskit/atlassian-navigation";
import { MenuItem } from "./menu-item";
import { LeftLogo } from "./left-logo";
import { UserPopup } from "./user-popup";

export const TopBar = () => {
  return (
    <AtlassianNavigation
      label="site"
      moreLabel="More"
      primaryItems={[
        <MenuItem path="/">Home</MenuItem>,
        <MenuItem path="/user-profile">User profile</MenuItem>,
      ]}
      renderProductHome={LeftLogo}
      renderProfile={UserPopup}
    />
  );
};
