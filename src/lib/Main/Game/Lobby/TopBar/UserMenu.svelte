<script lang="ts">
  import { stopSocket } from "../../../../../ts/server/main";

  let expanded = false;

  function toggle() {
    expanded = !expanded;
  }

  function leave() {
    stopSocket();
  }
</script>

<div class="usermenu" class:expanded>
  <button class="material-icons usermenu" on:click={toggle}>person</button>
  <button class="material-icons action" on:click={leave}>logout</button>
  <button class="material-icons action">key</button>
  <button class="material-icons action">diversity_2</button>
</div>
