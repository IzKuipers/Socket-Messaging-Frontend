<script lang="ts">
  import { onMount } from "svelte";
  import "../css/loader.css";

  export let ca = false;
  let slotter: HTMLParagraphElement;
  let loaderColor = "";

  onMount(() => {
    loaderColor = getComputedStyle(slotter).color;
  });
</script>

<div class="loader" class:ca>
  <div class="spinner" style="border-top-color: {loaderColor};" />
  <p bind:this={slotter}><slot /></p>
</div>
