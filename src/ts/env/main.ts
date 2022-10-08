import type { Socket } from "socket.io-client";
import { writable, type Writable } from "svelte/store";

export const currentSock: Writable<[Socket, string]> = writable<
  [Socket, string]
>([null, null]);
