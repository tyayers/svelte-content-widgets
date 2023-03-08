<script lang="ts">
  import SearchBox from "./Search.box.svelte";
  import type { SearchResult } from "./DataInterface";
  import { SearchPosts } from "./DataService";

  let results: SearchResult[] = [];

  function searchClick(event) {
    alert("click event from id " + event.detail.id);
  }
</script>

<div class="test">
  <SearchBox search={SearchPosts} on:click={searchClick} />
</div>

<style>
  .test {
    position: absolute;
    left: 50px;
    top: 50px;
  }
</style>
