<script lang="ts">
  import "./css/main.css";
  import Login from "./lib/Login.svelte";
  import { currentSock } from "./ts/env/main";
</script>

<div class="app">
  {#if !$currentSock[0]}
    <Login />
  {:else}
    <h1>Connected.</h1>
  {/if}
</div>
