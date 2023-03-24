<script lang="ts">
  import type { PostComment } from "./DataInterface";

  export let data: PostComment = undefined;
  export let level: number = 0;

  let editMode: boolean = false;
  let backupContent: string = "";

  function startEdit() {
    backupContent = data.content;
    editMode = true;
  }

  function cancelEdit() {
    data.content = backupContent;
    editMode = false;
  }

  function init(el){
    el.focus()
  }

</script>

<div class="outer_container">
  <div style="margin-left: {level * 20}px;">
    <div class="container">
      {#if data}
        <div class="frame">
          <div class="profile">
            <img
              alt="user profile"
              class="profile"
              width="16"
              src={data.authorProfilePic}
            />
          </div>
          <div class="bylines">
            <div class="byline_left">
              <div class="byline_author">
                {data.authorDisplayName}
              </div>
              <div class="byline_details">
                {new Date(data.created).toDateString()}
              </div>
            </div>
            <div class="byline_right">
              {#if editMode}
                <button class="cancelbutton" on:click={cancelEdit}>Cancel</button>
                <button class="publishbutton" on:click={() => {editMode = !editMode}}>Submit</button>
              {:else}
                <span class="edit_button" on:click={startEdit}>
                  <span class="text">Edit</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Write"
                    ><path
                      d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                      fill="currentColor"
                    /><path
                      d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                      stroke="currentColor"
                    /></svg
                  >
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/if}
    </div>
    <div class="content">
      {#if editMode}
        <textarea class="content_text" rows="4" bind:value={data.content} use:init></textarea>
      {:else}
        <div>{data.content}</div>
      {/if}
    </div>
  </div>

</div>

<style>
  .outer_container {
    max-width: 680px;
  }

  .container {
    cursor: pointer;
    display: flex;
    margin-bottom: 15px;
    margin-top: 15px;
    padding-top: 30px;
  }

  .frame {
    margin: 0px 24px;
    /* max-width: 680px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .bylines {
    margin-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .profile {
    height: 34px;
    width: 34px;
    border-radius: 50%;
  }

  .byline_left {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 15px;
  }

  .byline_details {
    width: 100%;
    margin-top: 4px;
    font-size: 12px;
    color: rgba(117, 117, 117, 1);
  }

  .byline_right {
    width: 100%;
    text-align: right;
  }

  .edit_button {
    margin-left: 20px;
    color: rgba(117, 117, 117, 1);
  }

  .edit_button .text {
    position: relative;
    font-size: 15px;
    top: -6px;
  }

  .publishbutton {
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    /* margin-right: 20px; */
    height: 25px;
    width: 65px;
    /* margin-top: 7px; */
    background: #1a8917;
    border-color: #1a8917;
    color: white;
  }

  .cancelbutton {
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    /* margin-right: 20px; */
    height: 25px;
    width: 65px;
    /* margin-top: 7px; */
    background: #e2e2e2;
    border-color: #d0d0d0;
    color: rgb(146, 146, 146);
    margin-right: 2px;
  }

  .content {
    margin: 0px 24px;
    max-width: 680px;
    width: 100%;
    font-size: 15px;
    color: rgba(117, 117, 117, 1);
  }

  .content_text {
    width: 90%;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 5px;
    box-sizing: border-box;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .content_text:focus {
    outline: none !important;
    border: 1px solid lightgray;
  }
</style>
