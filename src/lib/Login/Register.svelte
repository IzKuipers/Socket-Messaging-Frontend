<script lang="ts">
  import { login } from "../../ts/server/auth";
  import { getServer } from "../../ts/server/main";

  let username;
  let password;

  async function doRegister() {
    getServer().emit("createUser", username, password, (valid: boolean) => {
      console.warn(`Creating user: ${username} (${valid})`);

      if (!valid) {
        alert("User creation failed");

        return;
      }

      login(username, password);
    });
  }
</script>

<p>Let's make an account for you</p>
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
  on:click={doRegister}
>
  Register
</button>
