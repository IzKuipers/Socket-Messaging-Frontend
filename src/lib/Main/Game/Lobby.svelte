<script lang="ts">
  import { presentPlayers } from "../../../ts/env/main";
  import DetailsPane from "./Lobby/DetailsPane.svelte";
  import PlayerList from "./Lobby/PlayerList.svelte";

  import TopBar from "./Lobby/TopBar.svelte";
</script>

<TopBar />
<PlayerList />
<DetailsPane />
