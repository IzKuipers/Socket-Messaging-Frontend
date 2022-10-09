<script lang="ts">
  import user from "../../../../../assets/user-dark.png";
  import { userData } from "../../../../../ts/env/main";
</script>

<div class="user">
  {#if $userData}
    <img src={user} alt={$userData.name} class="pfp" />
    <div class="details">
      <h3 class="name">{$userData.name}</h3>
      <p class="score">Score: {$userData.score}</p>
      <p class="level">Level: {Math.floor($userData.score / 100)}</p>
    </div>
  {/if}
</div>
