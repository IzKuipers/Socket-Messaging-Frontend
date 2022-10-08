import { Clients } from "../../clients/store";
import { getServer } from "../main";
import { currentSock } from "./../../env/main";

export const ListenStore: { [key: string]: (...args: any[]) => any } = {
  connected: (id: string, c: string[]) => {
    currentSock.set([getServer(), id]);

    Clients.set(c);
  },
  "update-presence": (c: string[], C: string) => {
    console.log(c.includes(C) ? `${C} connected` : `${C} disconnected`);
    Clients.set(c);
  },
};
