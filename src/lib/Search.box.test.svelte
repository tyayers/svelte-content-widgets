<script lang="ts">
  import SearchBox from './Search.box.svelte'
  import type { SearchResult } from './DataInterface'

  let data: SearchResult[] = [
    {
      id: "1",
      title: "My first post about trees...",
    },
    {
      id: "2",
      title: "My first post about jelly beans...",
    },
    {
      id: "3",
      title: "My first post about fish...",
    },
  ];

  let results: SearchResult[] = [];

  function search(event) {
    let tempResults: SearchResult[] = [];

    if (event.detail.text) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].title.includes(event.detail.text)) {
          tempResults.push(data[i]);
        }
      }
    }

    results = tempResults;    
  }

  function searchClick(event) {
    console.log("click event from id " + event.detail.id)
  }
</script>


<div class="test">
  <SearchBox on:search={search} on:click={searchClick} results={results}/>
</div>
<style>
  .test {
    position: absolute;
    left: 50px;
    top: 50px;
  }
</style>