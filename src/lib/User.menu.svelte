<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { AppUser } from "./DataInterface";
  export let user: AppUser;

  const dispatch = createEventDispatcher();

  let menuVisible: boolean = false;

  function signOut() {
    dispatch("signOut");
  }
</script>

{#if user}
  <img
    on:mousedown={() => (menuVisible = !menuVisible)}
    src={user.photoURL}
    alt="The user."
    class="profilebutton"
  />
{/if}

{#if menuVisible}
  <div class="menuPanel">
    <div class="arrow" />
    <div class="menu">
      <div class="panel">
        <div class="result" on:mousedown={signOut}>Sign out</div>
      </div>
    </div>
  </div>
{/if}

<style>
  .profilebutton {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  .menuPanel {
    position: absolute;
    top: 45px;
    right: -125px;
  }

  .menu {
    position: relative;
    left: -120px;
    top: -10px;
    max-height: 200px;
    width: 160px;
    overflow-y: scroll;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px;
    border: 1px solid rgb(242, 242, 242);
    border-radius: 4px;
  }

  .panel {
    position: relative;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    z-index: 2;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .arrow {
    position: relative;
    top: -22px;
    left: 10px;
    z-index: 1;
    border: 1px solid rgb(242, 242, 242);
    box-shadow: rgba(0, 0, 0, 0.15) -1px -1px 1px -1px;
    transform: rotate(45deg) translate(16px, 16px);
    background: rgb(255, 255, 255);
    height: 14px;
    width: 14px;
    display: block;
    content: "";
    pointer-events: none;
  }

  .result {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    border-bottom: 1px dashed rgb(242, 242, 242);
    cursor: pointer;
    font-size: 16px;
  }
</style>
