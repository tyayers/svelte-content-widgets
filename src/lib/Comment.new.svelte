<script lang="ts">

  import type { AppUser, PostComment } from "./DataInterface";

  export let parentId: string = "";
  export let submit: (newComment: PostComment) => Promise<boolean>;

  let localUser: AppUser = undefined;
  let commentText: string = ""; 

  // replace in real code with user event to set object
  localUser = {
      email: "test@test.com",
      displayName: "Test User",
      photoURL:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    } as AppUser;

  function doSubmit() {
    let newComment: PostComment = {
      id: makeid(8),
      created: (new Date()).toISOString(),
      updated: "",
      authorId: localUser.uid,
      authorDisplayName: localUser.displayName,
      authorProfilePic: localUser.photoURL,
      content: commentText,
      upvotes: 0,
      children: []
    };

    submit(newComment).then((result: boolean) => {
      commentText = "";
    })
  }

  function makeid(length: number): string {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }  
</script>

<div class="component">
  <div class="frame">
    <div class="profile">
      <img
        alt="user profile"
        class="profile"
        width="16"
        src={localUser.photoURL}
      />
    </div>
    <div class="bylines">
      <div class="byline_left">
        <div class="byline_author">
          {localUser.displayName}
        </div>
      </div>
    </div>
  </div>
  <textarea class="content" placeholder="What are your thoughts?" rows="4" bind:value={commentText}></textarea>
  <div class="controls">
    <button disabled={commentText ? false : true} class="publishbutton" on:click={doSubmit}>Respond</button>
  </div>
</div>

<style>

  .component {
    width: 100%;
    max-width: 680px;
    min-height: 170px;
    margin-left: 18px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px;
  }

  .frame {
    padding-top: 14px;
    padding-left: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .bylines {
    margin-left: 10px;
    margin-top: 8px;
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

  .content {
    margin-left: 18px;
    margin-top: 12px;
    box-sizing: border-box;
    border: 0px solid lightgray;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 90%;
    font-size: 14px;
  }

  .content:focus {
    outline: none !important;
  }

  .controls {
    padding-right: 18px;
    padding-top: 8px;
    padding-bottom: 12px;
    text-align: right;
  }

  .publishbutton {
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    /* margin-right: 20px; */
    height: 26px;
    width: 65px;
    /* margin-top: 7px; */
    background: #1a8917;
    border-color: #1a8917;
    color: white;
  }

  .publishbutton:disabled {
    background: lightgray;
    color: gray;
    border-color: lightgray;
  }
</style>