<script lang="ts">
  import { dialogData, loggedIn } from "../../ts/env/main";

  import { login } from "../../ts/server/auth";
  import { stopSocket } from "../../ts/server/main";
  import Register from "./Register.svelte";

  export let registering: boolean;
  let username;
  let password;

  async function doLogin() {
    await login(username, password, (v) => {
      if (!v)
        dialogData.set({
          title: "Login error",
          message:
            "MultiClick can't log you in. It's possible that you are already logged in on another device, or that the credentials are incorrect.<br/><br/>Please check the credentails and try again.<br/><br/>If you don't have an account, select 'No account?' on the login page.",
          buttons: [
            {
              capt: "Close",
              icon: "close",
              className: "clr-blue",
              action: () => {},
            },
            {
              capt: "Leave Server",
              icon: "logout",
              className: "clr-red",
              action: () => stopSocket(),
            },
            {
              capt: "No account?",
              icon: "person_add",
              className: "clr-orange",
              action: () => (registering = true),
            },
          ],
        });
    });
  }
</script>

<p>Welcome back! Who are you?</p>
<input
  bind:value={username}
  class="full"
  placeholder="Username"
  maxlength="10"
/>
<input
  bind:value={password}
  class="full"
  placeholder="Password"
  type="password"
/>
<button
  class="full clr-green"
  disabled={!username || !password}
  on:click={doLogin}
>
  Continue
</button>
