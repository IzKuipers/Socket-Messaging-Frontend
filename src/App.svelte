<script lang="ts">
  import "./css/main.css";
  import { onMount } from "svelte";
  import { currentSock } from "./ts/env/main";
  import { resumeSession } from "./ts/server/main";
  import Connect from "./lib/Connect.svelte";
  import Main from "./lib/Main.svelte";
  import Dialog from "./lib/Dialog.svelte";

  onMount(() => {
    resumeSession();
  });
</script>

<div class="app">
  {#if !$currentSock[0]}
    <Connect />
  {:else}
    <Main />
  {/if}
  <Dialog />
</div>
