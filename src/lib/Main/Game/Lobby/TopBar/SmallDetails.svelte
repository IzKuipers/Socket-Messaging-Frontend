<script lang="ts">
  import { userData } from "../../../../../ts/env/main";
</script>

<div class="smalldetails">
  <div class="detail">
    <span class="material-icons clr-yellow"> payments </span>
    <span class="value">
      {$userData.score}
    </span>
  </div>
  <div class="detail">
    <span class="material-icons clr-blue"> leaderboard </span>
    <span class="value">
      {Math.floor($userData.score / 100)}
    </span>
  </div>
</div>
