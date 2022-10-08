<script lang="ts">
  import "./css/main.css";
  import Connect from "./lib/Connect.svelte";
  import Main from "./lib/Main.svelte";
  import { currentSock } from "./ts/env/main";
</script>

<div class="app">
  {#if !$currentSock[0]}
    <Connect />
  {:else}
    <Main />
  {/if}
</div>
