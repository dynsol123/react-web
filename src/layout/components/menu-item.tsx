import { ButtonProps } from "@atlaskit/button";
import React, { useEffect, useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router";
import { PrimaryButton } from "@atlaskit/atlassian-navigation";

type MenuItemProps = ButtonProps & {
  path: string;
};

export const MenuItem = ({ path, ...props }: MenuItemProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const isActivePath =
      matchPath(location.pathname, { path, exact: true }) !== null;
    setIsHighlighted(isActivePath);
  }, [location.pathname, path]);

  const handleClick = () => {
    history.push(path);
  };
  return (
    <PrimaryButton
      isHighlighted={isHighlighted}
      onClick={handleClick}
      {...props}
    />
  );
};
