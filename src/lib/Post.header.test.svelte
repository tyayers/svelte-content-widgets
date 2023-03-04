<script lang="ts">
  import type { Post, PostOverview } from "./DataInterface";
  import PostHeader from "./Post.header.svelte";

  let post: Post = {
    header: {
      id: "1",
      title: "I like jelly beans",
      summary: "I like jelly beans, what can I say?",
      author: "test@test.com",
      created: "2018-01-01T00:00:00.000+01:00",
      updated: "",
      upvotes: 0,
      commentCount: 0,
      fileCount: 0,
    },
    content: "hello world!!",
    files: [],
  };
</script>

<PostHeader {post} />
