<script lang="ts">
  import { userData } from "../../../../../ts/env/main";
</script>

<div class="awards">
  {#if $userData}
    <h1 class="header">Awards</h1>
  {/if}
</div>
