<script lang="ts">
  import logo from "../assets/logo.png";
  import { connectTo } from "../ts/server/main";
  import InlineLoader from "./InlineLoader.svelte";
  import Loader from "./Loader.svelte";
  let host: string;
  let connecting = false;

  async function connect() {
    connecting = true;
    await connectTo(`${host}:1942`, (valid: boolean) => {
      connecting = false;
      if (!valid) {
        error();
      }
    });
  }

  function error() {
    alert("Connection failed");
  }
</script>

<div class="connect-bg" />
<div class="connect ca">
  {#if !connecting}
    <img src={logo} alt="MultiClick" class="logo" />
    <h1 class="header">MultiClick</h1>
    <p>Enter server hostname:</p>
    <input
      bind:value={host}
      class="full"
      placeholder="localhost"
      maxlength="30"
    />
    <button class="full clr-green" disabled={!host} on:click={connect}>
      {host ? `Connect to ${host}` : "Connect"}
    </button>
  {:else}
    <Loader ca>Connecting</Loader>
  {/if}
</div>
