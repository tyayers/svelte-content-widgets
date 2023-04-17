<script lang="ts">
  import type { PostOverview } from "./DataInterface";


  export let posts: PostOverview[] = [];
</script>

<div class="frame">
  <h3>Popular</h3>
  <div class="posts_frame">
    {#each posts as post}
      <div class="post_frame">
        <div class="user">
          <div class="profile">
            <img
              alt="user profile"
              class="profile"
              width="24"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>
          <div class="byline">
            {post.author}
          </div>
        </div>

        <div class="post_title">
          {post.title}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .frame {
    margin-top: 10px;
    max-width: 280px;
  }

  .posts_frame {
    margin-top: -10px;
  }

  .post_frame {
    margin-top: 14px;
  }

  .user {
    display: flex;
  }

  .profile {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }

  .byline {
    position: relative;
    font-size: 14px;
    top: 3px;
    left: 6px;
    font-weight: 600;
  }

  .post_title {
    margin-top: 8px;
    margin-left: 2px;
    font-weight: 800;
  }
</style>