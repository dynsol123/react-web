import { ExitingPersistence, FadeIn } from "@atlaskit/motion";
import Spinner from "@atlaskit/spinner";
import styled from "styled-components";
import { User } from "../models/user";
import { UserInfo } from "./user-info";
import { useGetUser } from "../hooks/use-get-user";

export const UserProfile = () => {
  const { data, status } = useGetUser();

  return (
    <>
      <ExitingPersistence appear>
        {status === "success" && (
          <FadeIn>{() => <UserInfo user={data as User} />}</FadeIn>
        )}
      </ExitingPersistence>
      <ExitingPersistence>
        {status === "loading" && (
          <FadeIn>
            {(props) => (
              <LoaderContainer {...props}>
                <Spinner size="xlarge" />
              </LoaderContainer>
            )}
          </FadeIn>
        )}
      </ExitingPersistence>
    </>
  );
};

const LoaderContainer = styled.span`
  position: absolute;
  left: calc(50% - 48px);
  // 56px is topBar height 120px is footer height 48px is half of the spinner size
  height: calc(100vh - 56px - 120px - 48px);
  align-items: center;
  display: flex;
`;
