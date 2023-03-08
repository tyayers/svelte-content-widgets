<script lang="ts">
  import type { AppUser } from "./DataInterface";
  import UserMenu from "./User.menu.svelte";

  let user: AppUser = {
    email: "test@example.com",
    displayName: "Test User",
    photoURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
  };
</script>

<div class="usermenu">
  <UserMenu {user} on:signOut={() => alert("signout!")} />
</div>

<style>
  .usermenu {
    position: absolute;
    right: 10px;
  }
</style>
