<script lang="ts">
  import { loggedIn } from "../ts/env/main";
  import Login from "./Login.svelte";
  import Game from "./Main/Game.svelte";
</script>

{#if $loggedIn}
  <Game />
{:else}
  <Login />
{/if}
