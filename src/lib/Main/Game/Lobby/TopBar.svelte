<script lang="ts">
  import logo from "../../../../assets/logo.png";
  import SmallDetails from "./TopBar/SmallDetails.svelte";
  import UserMenu from "./TopBar/UserMenu.svelte";
</script>

<div class="topbar">
  <h1 class="header">
    <img src={logo} alt="MultiClick" class="logo" />MultiClick
  </h1>
  <div class="right">
    <UserMenu />
    <SmallDetails />
  </div>
</div>
