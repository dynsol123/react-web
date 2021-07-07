import { useQuery } from "react-query";
import { User } from "../models/user";
import { fetchUser } from "../services/user-service-query";

export const useGetUser = () =>
  useQuery<User>("users", () => fetchUser("1"), {
    refetchOnWindowFocus: false,
  });
