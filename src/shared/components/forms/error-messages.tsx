import React from "react";
import { ErrorMessage } from "@atlaskit/form";

type ErrorMessagesProps = {
  error?: string;
  valid?: boolean;
  children?: React.ReactNode;
};

export const ErrorMessages = ({ error, children }: ErrorMessagesProps) => {
  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {children}
    </>
  );
};
