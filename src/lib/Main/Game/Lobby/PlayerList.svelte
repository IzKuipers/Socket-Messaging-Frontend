<script lang="ts">
  import { presentPlayers, userData } from "../../../../ts/env/main";
  import PlayerItem from "./PlayerList/PlayerItem.svelte";
</script>

<div class="playerlist">
  <h1 class="header">Online players</h1>
  {#if $userData}
    {#each $presentPlayers as player}
      {#if player.name != $userData.name}
        <PlayerItem {player} />
      {/if}
    {/each}
    {#if $presentPlayers.length - 1 == 0}
      <p class="no-players">No other players online.</p>
    {/if}
  {/if}
</div>
