<script lang="ts">
  import type { DialogButton } from "../ts/dialog/main";

  import { dialogData } from "../ts/env/main";
  import Button from "./Dialog/Button.svelte";

  let header: string;
  let message: string;
  let buttons: DialogButton[];

  dialogData.subscribe((v) => {
    if (v) {
      header = v.title;
      message = v.message;
      buttons = v.buttons;
    }
  });
</script>

<div class="dialog-shade" class:show={$dialogData} />
<div class="dialog" class:show={$dialogData}>
  {#if header && message && buttons}
    <div class="dialog-content">
      <h1 class="header">{header}</h1>
      <p class="body">{@html message}</p>
      <div class="controls">
        {#each buttons as button}
          <Button data={button} />
        {/each}
      </div>
    </div>
  {/if}
</div>
