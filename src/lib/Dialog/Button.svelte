<script lang="ts">
  import type { DialogButton } from "../../ts/dialog/main";
  import { dialogData } from "../../ts/env/main";

  export let data: DialogButton;

  function ev() {
    data.action();

    dialogData.set(null);
  }
</script>

<button class={data.className} on:click={ev}>
  {#if data.icon}
    <span class="material-icons">
      {data.icon}
    </span>
  {/if}
  {data.capt}
</button>
