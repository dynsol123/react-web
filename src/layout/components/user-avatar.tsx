import { TriggerProps } from "@atlaskit/popup";
import Avatar, { AvatarPropTypes } from "@atlaskit/avatar";
import React, { forwardRef } from "react";
import { useGetUser } from "../../user-profile/hooks/use-get-user";

type AvatarProps = TriggerProps & AvatarPropTypes;
export const UserAvatar = forwardRef<HTMLElement, AvatarProps>((props, ref) => {
  const { data } = useGetUser();
  return <Avatar ref={ref} src={data?.avatar} size="large" {...props} />;
});
