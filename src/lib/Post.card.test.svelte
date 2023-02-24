<script lang="ts">
  import type {PostOverview} from './DataInterface'
  import PostCard from './Post.card.svelte'
  
  let myPost: PostOverview = {
    id: "1",
    title: "I like jelly beans",
    summary: "I like jelly beans, what can I say?",
    author: "test@test.com",
    created: "2018-01-01T00:00:00.000+01:00",
    updated: "",
    upvotes: 3,
    commentCount: 12,
    fileCount: 1 
  }
</script>

<PostCard post={myPost} />