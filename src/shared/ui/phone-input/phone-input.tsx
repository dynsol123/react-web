import React from "react";
import ReactPhoneInput, {
  PhoneInputProps as ReactPhoneInputProps,
} from "react-phone-input-2";

type PhoneInputProps = ReactPhoneInputProps;

export const PhoneInput = (props: PhoneInputProps) => {
  return (
    <ReactPhoneInput
      inputStyle={{
        backgroundColor: "transparent",
        border: 0,
        boxSizing: "border-box",
        color: "inherit",
        cursor: "inherit",
        fontSize: 14,
        minWidth: 0,
        outline: "none",
        width: "100%",
        lineHeight: 1.4285714285714286,
        fontFamily: "inherit",
        padding: "8px 6px",
      }}
      containerStyle={{
        alignItems: "center",
        backgroundColor: "#FAFBFC",
        borderColor: "#DFE1E6",
        color: "#091E42",
        cursor: "text",
        borderRadius: "3px",
        borderWidth: "2px",
        borderStyle: "solid",
        boxSizing: "border-box",
        display: "flex",
        flex: "1 1 100%",
        fontSize: "14px",
        justifyContent: "space-between",
        maxWidth: "100%",
        overflow: "hidden",
        transition:
          "background-color 0.2s ease-in-out,border-color 0.2s ease-in-out",
        wordWrap: "break-word",
        verticalAlign: "top",
        pointerEvents: "auto",
      }}
      specialLabel=""
      country="us"
      {...props}
    />
  );
};
