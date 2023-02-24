<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import type { AppUser } from './DataInterface'

  export const user = writable(undefined);
  export const url = writable("/");

  let localUser: AppUser = undefined;
  
  export function navigate(path: string) {
    console.log("navigate: " + path)
  }

  export function signInWithGoogle() {
    localUser = {
      email: "test@test.com"
    };
    
    user.update((n) => localUser);

    localStorage.setItem("UserSignedIn", "true");
    
    navigate("/home")
  }
  
  export function signUserOut() {
    localStorage.setItem("UserSignedIn", "false");
    localUser = undefined;
    
    user.update((n) => localUser);

    navigate("/")
  }
  
</script>

<script lang="ts">
  import { onMount } from "svelte";
  
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
	import SearchBoxTest from './lib/Search.box.test.svelte'
  import HeaderTest from './lib/Header.test.svelte'
  import PostCardTest from './lib/Post.card.test.svelte'
  import PostsView from './lib/Posts.view.svelte'

  import { LoadPosts } from './lib/DataService'
  import type {PostOverviewCollection, PostOverview} from './DataInterface'

  let allPosts: PostOverviewCollection = undefined;
  
  onMount(async function () {
  	LoadPosts().then((posts) => {
      console.log("got posts " + Object.values(posts).length)
      allPosts = posts;
    })
  });
</script>

<main>
  <HeaderTest />
  <PostsView posts={allPosts} />
</main>

<style>
  main {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0px;
    margin: 0px;
  }
</style>
