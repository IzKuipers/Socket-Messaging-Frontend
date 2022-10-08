import { loggedIn, userData } from "../env/main";
import type { Player } from "../user/interface";
import { getServer } from "./main";

export async function login(username: string, password: string) {
  getServer().emit("login", username, password, async (valid: boolean) => {
    loggedIn.set(valid);
    if (valid) {
      console.log(`Login successful for user ${username}`);

      await fetchUserData(username, password);
    }
  });
}

export async function logout() {
  loggedIn.set(false);
  userData.set(null);
}

export async function fetchUserData(username: string, password: string) {
  getServer().emit(
    "getUserData",
    username,
    password,
    (user: Player | null | false) => {
      if (!user) {
        logout();
        return;
      }

      userData.set(user);
    }
  );
}
