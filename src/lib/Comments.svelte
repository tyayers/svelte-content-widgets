<script lang="ts">
  import Comment from './Comment.svelte'
  import type { PostComment } from './DataInterface';

  export let data: PostComment[] = [];
</script>

<div>
  {#each data as comment, i}
    <Comment data={comment} />
  {/each}
</div>