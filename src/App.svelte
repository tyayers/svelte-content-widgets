<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import type { AppUser } from "./lib/DataInterface";

  export const user = writable(undefined);
  export const url = writable("/");

  let localUser: AppUser = undefined;
  export let userSignedIn: boolean = primitiveToBoolean(
    localStorage.getItem("UserSignedIn")
  );

  if (userSignedIn) {
    signInWithGoogle();
  }

  export function navigate(path: string): void {
    console.log("navigate: " + path);
  }

  export function signInWithGoogle() {
    localUser = {
      email: "test@test.com",
      photoURL:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    };

    user.update((n) => localUser);

    userSignedIn = true;
    localStorage.setItem("UserSignedIn", "true");

    navigate("/home");
  }

  export function signUserOut() {
    userSignedIn = false;
    localStorage.setItem("UserSignedIn", "false");
    localUser = null;

    user.update((n) => localUser);

    navigate("/");
  }

  function primitiveToBoolean(
    value: string | number | boolean | null | undefined
  ): boolean {
    if (typeof value === "string") {
      return value.toLowerCase() === "true" || !!+value; // here we parse to number first
    }

    return !!value;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import SearchBoxTest from "./lib/Search.box.test.svelte";
  import HeaderTest from "./lib/Header.test.svelte";
  import PostCardTest from "./lib/Post.card.test.svelte";
  import PostsView from "./lib/Posts.view.svelte";
  import PostHeaderTest from "./lib/Post.header.test.svelte";
  import PostFooterTest from "./lib/Post.footer.test.svelte"
  import UserMenuTest from "./lib/User.menu.test.svelte";
  import CommentsText from "./lib/Comments.test.svelte";
  import { LoadPosts } from "./lib/DataService";
  import type {
    PostOverviewCollection,
    PostOverview,
  } from "./lib/DataInterface";

  let allPosts: PostOverviewCollection = undefined;

  onMount(async function () {
    LoadPosts().then((posts) => {
      console.log("got posts " + Object.values(posts).length);
      allPosts = posts;
    });
  });
</script>

<main>
  <!-- <HeaderTest />
  <PostsView posts={allPosts} /> -->
  <!-- <PostHeaderTest /> -->
  <PostFooterTest />
  <CommentsText />
</main>

<style>
  main {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0px;
    margin: 0px;
  }
</style>
