<script lang="ts">
  import logo from "../../../../assets/logo.png";
  import { userData } from "../../../../ts/env/main";
</script>

<div class="topbar">
  <h1 class="header">
    <img src={logo} alt="MultiClick" class="logo" />{#if $userData}
      {$userData.name}
    {/if}
  </h1>
</div>
