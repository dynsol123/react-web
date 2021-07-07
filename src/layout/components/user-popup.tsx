import Popup from "@atlaskit/popup";
import React, { useState } from "react";
import { UserAvatar } from "./user-avatar";
import { UserPopupContent } from "./user-popup-content";

export const UserPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup
      placement="bottom-start"
      content={(props) => <UserPopupContent onClose={onClose} {...props} />}
      isOpen={isOpen}
      onClose={onClose}
      trigger={(triggerProps) => (
        <UserAvatar onClick={onClick} {...triggerProps} />
      )}
    />
  );
};
