<script lang="ts">
  import { userData } from "../../ts/env/main";
  import Lobby from "./Game/Lobby.svelte";
</script>

{#if $userData}
  <Lobby />
{/if}
