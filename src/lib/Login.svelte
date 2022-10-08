<script lang="ts">
  import logo from "../assets/logo.png";
  import { loggedIn } from "../ts/env/main";
  import { login } from "../ts/server/auth";
  import { getServer, stopSocket } from "../ts/server/main";
  let username;
  let password;

  async function doLogin() {
    login(username, password);
  }

  async function register() {
    getServer().emit("createUser", username, password, (valid: boolean) => {
      console.warn(`Creating user: ${username} (${valid})`);
    });
  }

  function leave() {
    stopSocket();
  }
</script>

<div class="login-bg" />
<div class="ca login">
  <img src={logo} alt="MultiClick" class="logo" />
  <h1 class="header">MultiClick</h1>
  <p>Welcome back! Who are you?</p>
  <input
    bind:value={username}
    class="full"
    placeholder="Username"
    maxlength="30"
  />
  <input
    bind:value={password}
    class="full"
    placeholder="Password"
    maxlength="30"
    type="password"
  />
  <button
    class="full clr-green"
    disabled={!username || !password}
    on:click={doLogin}
  >
    Continue
  </button>
  <button class="full clr-orange" on:click={leave}>Leave Server</button>
</div>
