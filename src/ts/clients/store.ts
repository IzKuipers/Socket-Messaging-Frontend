import { writable, type Writable } from "svelte/store";

export const Clients: Writable<string[]> = writable<string[]>([]);
