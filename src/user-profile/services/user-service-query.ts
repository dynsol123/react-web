import { API_URL } from "../../config/config";

export const fetchUser = async (id: string) =>
  (await fetch(`${API_URL}/users/${id}`)).json();
