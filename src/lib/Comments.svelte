<script lang="ts">
  import { children } from 'svelte/internal';
  import Comment from './Comment.svelte'
  import NewComment from './Comment.new.svelte';

  import type { PostComment } from './DataInterface';

  export let data: PostComment[] = [];

  function createComment(newComment: PostComment): Promise<boolean> {
    return new Promise((resolve, reject) => {
      var newData = data;
      newData.push(newComment);
      data = newData;
      
      resolve(true);
    });
  }
</script>

<div>
  <NewComment submit={createComment} />
  {#each data as comment, i}
    <Comment data={comment} />
    {#if comment.children.length > 0}
      {#each comment.children as child_comment1}
        <div class="comment_level1">
          <Comment data={child_comment1} level=1 />
        </div>
      {/each}
    {/if}
  {/each}
</div>

<style>
  .comment_level1 {
    margin-left: 0px;
  }
</style>