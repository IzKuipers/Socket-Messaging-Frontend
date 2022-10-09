<script lang="ts">
  import type { Player } from "../../../../../ts/user/interface";

  export let player: Player;
</script>

<div class="player">
  <p class="name">{player.name}</p>
  <p class="score">{player.score}</p>
</div>
