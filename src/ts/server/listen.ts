import { ListenStore } from "./listen/store";
import { getServer } from "./main";
export let initialized = false;

export function serverListen() {
  if (!initialized) init();

  console.log("Started server listener");
}

function init() {
  const entries = Object.entries(ListenStore);

  for (let i = 0; i < entries.length; i++) {
    console.log(`Creating broadcast listener for ${entries[i][0]}`);

    getServer().on(entries[i][0], entries[i][1]);
  }
}

export function undoListeners() {
  initialized = false;
}
