import type { Socket } from "socket.io-client";
import { writable, type Writable } from "svelte/store";
import type { Player } from "../user/interface";

export const currentSock: Writable<[Socket, string]> = writable<
  [Socket, string]
>([null, null]);
export const loggedIn: Writable<boolean> = writable<boolean>(false);
export const userData: Writable<Player> = writable<Player>(null);
export const presentPlayers: Writable<Player[]> = writable<Player[]>([]);
