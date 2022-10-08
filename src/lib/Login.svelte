<script lang="ts">
  import { currentSock } from "../ts/env/main";
  import { connectTo } from "../ts/server/main";
  import InlineLoader from "./InlineLoader.svelte";

  let url: string = "";
  let thisId: string = "";
  let connecting = false;
  let errored = false;

  currentSock.subscribe((v) => {
    thisId = v[1];
  });

  function connect() {
    connecting = true;

    setTimeout(async () => {
      errored = await connectTo(url);

      if (errored) {
        setTimeout(() => {
          connecting = false;
          errored = false;
          url = "";
        }, 1000);
      }
    }, 1000);
  }
</script>

<div class="login">
  <div class="bg">
    <div class="ca content">
      <h3>Login</h3>
      <p>Enter server URL to connect.</p>
      <input bind:value={url} disabled={connecting} />
      <button on:click={connect} disabled={!url || connecting}>Connect</button>
      {#if connecting}
        {#if errored}
          Error!
        {:else}
          &nbsp;&nbsp;<InlineLoader inline>Connecting...</InlineLoader>
        {/if}
      {/if}
    </div>
  </div>
</div>
