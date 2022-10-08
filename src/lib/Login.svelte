<script lang="ts">
  import logo from "../assets/logo.png";
  import { loggedIn } from "../ts/env/main";
  import { getServer, stopSocket } from "../ts/server/main";
  let username;
  let password;

  async function login() {
    getServer().emit("login", username, password, (valid: boolean) => {
      loggedIn.set(valid);
      console.warn(`Logging in as: ${username} (${valid})`);
    });
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
    on:click={login}
  >
    Continue
  </button>
  <button
    class="full clr-blue"
    on:click={register}
    disabled={!username || !password}>Register</button
  >
</div>
