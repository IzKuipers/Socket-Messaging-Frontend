<script lang="ts">
  import logo from "../assets/logo.png";
  import { stopSocket } from "../ts/server/main";
  import Existing from "./Login/Existing.svelte";
  import Register from "./Login/Register.svelte";

  let registering = false;

  function toggleRegister() {
    registering = !registering;
  }

  function leave() {
    stopSocket();
  }
</script>

<div class="login-bg" />
<div class="ca login">
  <img src={logo} alt="MultiClick" class="logo" />
  <h1 class="header">MultiClick</h1>
  {#if registering}
    <Register />
  {:else}
    <Existing bind:registering />
  {/if}
  <button class="full clr-orange" on:click={leave}>Leave Server</button>
  <button class="flat full clr-blue" on:click={toggleRegister}
    >{registering ? "Have an" : "No"} account?</button
  >
</div>
