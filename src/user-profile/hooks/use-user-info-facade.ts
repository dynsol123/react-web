import { useHistory } from "react-router";
import { useWindowSize } from "../../hooks/use-window-size";
import { breakcpoints } from "../../config/config";

export const useUserInfoFacade = () => {
  const history = useHistory();
  const { width } = useWindowSize();
  const isMobile = width < breakcpoints.numberSize.sm;
  const handleGoToEditPage = () => {
    history.push("/edit-user");
  };
  return {
    handleGoToEditPage,
    isMobile,
  };
};
