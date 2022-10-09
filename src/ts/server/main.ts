import { currentSock, dialogData, loggedIn, userData } from "./../env/main";
import SocketIO, { Socket } from "socket.io-client";
import { serverListen, undoListeners } from "./listen";
import { get } from "svelte/store";
import { login } from "./auth";

export async function resumeSession() {
  console.log("resumeSession: getting stored data");
  const server = localStorage.getItem("mc-server");
  const authtoken = localStorage.getItem("mc-auth");

  if (!server) return;

  console.log("resumeSession: ... server valid");

  const [username, password] = atob(authtoken).split(":");

  if (!username || !password) return;

  console.log("resumeSession: ... credentials valid: logging in");

  connectTo(server, (v) => {
    login(username, password, (v) => {
      if (!v) {
        dialogData.set({
          title: "Unable to resume session",
          message:
            "The authenticator did not allow access to the server. This can be because you're already logged in on another device or because your password has been changed. Please try again later.",
          buttons: [
            {
              capt: "Close",
              icon: "close",
              className: "clr-green",
              action: () => {},
            },
            {
              capt: "Retry",
              icon: "refresh",
              className: "clr-orange",
              action: () => resumeSession(),
            },
          ],
        });
      }
    });
  });
}

export async function connectTo(url: string, callback: (valid) => void) {
  const sock = await SocketIO(url);

  sock.on("connect", () => {
    currentSock.set([sock, ""]);
    callback(true);
    serverListen();
    localStorage.setItem("mc-server", url);
  });

  sock.on("connect_error", () => {
    stopSocket(sock);
    callback(false);
  });

  return true;
}

export function stopSocket(sock?: Socket) {
  (sock || getServer()).disconnect();

  loggedIn.set(false);
  userData.set(null);
  currentSock.set([null, null]);
  localStorage.removeItem("mc-server");
  localStorage.removeItem("mc-auth");

  undoListeners();
}

export function isConnected() {
  return get(currentSock)[0] && get(currentSock)[1];
}

export function getServer() {
  return get(currentSock)[0];
}
