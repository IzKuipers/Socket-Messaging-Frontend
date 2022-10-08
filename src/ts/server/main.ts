import { currentSock } from "./../env/main";
import SocketIO, { Socket } from "socket.io-client";
import { serverListen, undoListeners } from "./listen";
import { get } from "svelte/store";

export async function connectTo(url: string, callback: (valid) => void) {
  const sock = await SocketIO(url);

  sock.on("connect", () => {
    currentSock.set([sock, ""]);
    callback(true);
    serverListen();
  });

  sock.on("connect_error", () => {
    stopSocket(sock);
    callback(false);
  });

  return true;
}

export function stopSocket(sock?: Socket) {
  (sock || getServer()).disconnect();

  currentSock.set([null, null]);

  undoListeners();
}

export function isConnected() {
  return get(currentSock)[0] && get(currentSock)[1];
}

export function getServer() {
  return get(currentSock)[0];
}
