import React from "react";
import Page, { Grid } from "@atlaskit/page";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import TextArea from "@atlaskit/textarea";
import Button, { ButtonGroup, LoadingButton } from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import styled from "styled-components";
import Avatar from "@atlaskit/avatar";
import CameraIcon from "@atlaskit/icon/glyph/camera";
import { User } from "../models/user";
import { PhoneInput } from "../../shared/ui/phone-input/phone-input";
import { valdiate } from "../../utils/validators";
import { useEditUserFacade } from "../hooks/use-edit-user-facade";
import { breakcpoints } from "../../config/config";
import { ErrorMessages } from "../../shared/components/forms/error-messages";

type FormData = User;

export const EditUser = () => {
  const {
    handleCancel,
    onSubmit,
    fileErrorMessage,
    getInputProps,
    getRootProps,
    file,
    data,
  } = useEditUserFacade();

  return (
    <Page>
      <Flex>
        <Grid layout="fixed">
          <>
            <AvatarContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <Avatar presence="online" size="xxlarge" src={file} />
              <StyledButton iconBefore={<CameraIcon label="avatar" />} />
              {fileErrorMessage && (
                <ErrorContainer>
                  <ErrorMessage>{fileErrorMessage}</ErrorMessage>
                </ErrorContainer>
              )}
            </AvatarContainer>
          </>
          <Container>
            <h1>Edit profile</h1>
            <Form<FormData> onSubmit={onSubmit}>
              {({ formProps, submitting }) => (
                <form {...formProps}>
                  <Field
                    name="firstName"
                    label="First name"
                    defaultValue={data?.firstName ?? ""}
                    isRequired
                    validate={(value) =>
                      valdiate(value, "First name", {
                        required: true,
                        min: 5,
                        max: 50,
                      })
                    }
                  >
                    {({ fieldProps, error, valid }) => (
                      <>
                        <TextField {...fieldProps} />
                        <ErrorMessages error={error} valid={valid}>
                          {!error && !valid && (
                            <HelperMessage>
                              Should be more than 4 characters
                            </HelperMessage>
                          )}
                          {!error && valid && (
                            <ValidMessage>Nice first name!</ValidMessage>
                          )}
                        </ErrorMessages>
                      </>
                    )}
                  </Field>
                  <Field
                    name="lastName"
                    label="Last name"
                    defaultValue={data?.lastName ?? ""}
                    isRequired
                    validate={(value) =>
                      valdiate(value, "Last name", {
                        required: true,
                        min: 5,
                        max: 50,
                      })
                    }
                  >
                    {({ fieldProps, error, valid }) => (
                      <>
                        <TextField {...fieldProps} />
                        <ErrorMessages error={error} valid={valid}>
                          {!error && !valid && (
                            <HelperMessage>
                              Should be more than 4 characters
                            </HelperMessage>
                          )}
                          {!error && valid && (
                            <ValidMessage>Nice last name!</ValidMessage>
                          )}
                        </ErrorMessages>
                      </>
                    )}
                  </Field>
                  <Field
                    name="email"
                    label="Email"
                    defaultValue={data?.email ?? ""}
                    isRequired
                    validate={(value) =>
                      valdiate(value, "Email", {
                        required: true,
                        email: true,
                      })
                    }
                  >
                    {({ fieldProps, error, valid }) => (
                      <>
                        <TextField {...fieldProps} />
                        <ErrorMessages error={error} valid={valid}>
                          {!error && !valid && (
                            <HelperMessage>
                              Should be more than 4 characters
                            </HelperMessage>
                          )}
                          {!error && valid && (
                            <ValidMessage>Nice email!</ValidMessage>
                          )}
                        </ErrorMessages>
                      </>
                    )}
                  </Field>
                  <Field
                    name="birthday"
                    label="Date of Birth"
                    defaultValue={data?.birthday ?? ""}
                    isRequired
                    validate={(value) =>
                      valdiate(value, "Date of Birth", {
                        required: true,
                      })
                    }
                  >
                    {({ fieldProps: { id, ...rest }, error }) => (
                      <>
                        <DatePicker selectProps={{ inputId: id }} {...rest} />
                        <ErrorMessages error={error} />
                      </>
                    )}
                  </Field>
                  <Field
                    name="phone"
                    label="Phone"
                    defaultValue={data?.phone ?? ""}
                    validate={(value) =>
                      valdiate(value, "Phone", {
                        phone: true,
                      })
                    }
                  >
                    {({ fieldProps, error }) => (
                      <>
                        <PhoneInput {...fieldProps} />
                        <ErrorMessages error={error} />
                      </>
                    )}
                  </Field>

                  <Field<string, HTMLTextAreaElement>
                    name="about"
                    label="About"
                    defaultValue={data?.about ?? ""}
                    validate={(value) =>
                      valdiate(value, "About", {
                        max: 500,
                      })
                    }
                  >
                    {({ fieldProps, error }) => (
                      <>
                        <TextArea minimumRows={5} {...fieldProps} />
                        <ErrorMessages error={error} />
                      </>
                    )}
                  </Field>
                  <FormFooter>
                    <ButtonGroup>
                      <Button appearance="subtle" onClick={handleCancel}>
                        Cancel
                      </Button>
                      <LoadingButton
                        appearance="primary"
                        type="submit"
                        isLoading={submitting}
                      >
                        Update profile
                      </LoadingButton>
                    </ButtonGroup>
                  </FormFooter>
                </form>
              )}
            </Form>
          </Container>
        </Grid>
      </Flex>
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
`;

const Flex = styled.div`
  display: block;
  @media only screen and ${breakcpoints.device.sm} {
    display: flex;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  margin-right: 24px;
  margin-top: 24px;
  position: relative;
  cursor: pointer;
`;

const ErrorContainer = styled.div`
  position: absolute;
  bottom: -50px;
`;

const StyledButton = styled(Button)`
  &&& {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #ebecf0;
  }
`;
