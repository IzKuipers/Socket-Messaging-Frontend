<script lang="ts">
  import { onMount } from "svelte";
  import "../css/loader.css";

  let slotter: HTMLParagraphElement;
  let loaderColor = "";

  export let inline: boolean = false;

  onMount(() => {
    loaderColor = getComputedStyle(slotter).color;
  });
</script>

<div class="loader inlined" class:dispinline={inline}>
  <div class="spinner" style="border-top-color: {loaderColor};" />
  <p bind:this={slotter}><slot /></p>
</div>

<style scoped>
  .loader.dispinline {
    display: inline-block;
  }
</style>
