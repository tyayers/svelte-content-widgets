<script lang="ts">
  import Comments from './Comments.svelte'
  import type { PostComment } from './DataInterface';

  let data: PostComment[] = [
    {
      id: "1",
      created: "2018-01-01T00:00:00.000+01:00",
      updated: "",
      authorId: "1",
      authorDisplayName: "Test User",
      authorProfilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      content: "Great post!",
      upvotes: 0,
      children: [
        {
          id: "1",
          created: "2018-01-01T00:00:00.000+01:00",
          updated: "",
          authorId: "1",
          authorDisplayName: "Test User",
          authorProfilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          content: "Great post!",
          upvotes: 0,
          children: [],
        }        
      ],
    },
    {
      id: "1",
      created: "2018-01-01T00:00:00.000+01:00",
      updated: "",
      authorId: "1",
      authorDisplayName: "Test User",
      authorProfilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      content: "Great post!",
      upvotes: 0,
      children: [],
    }    
  ];
</script>

<Comments {data} />