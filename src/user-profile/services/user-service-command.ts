import { API_URL } from "../../config/config";
import { User } from "../models/user";

export const updateUser = async (user: User) =>
  (
    await fetch(`${API_URL}/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
  ).json();
