import type { SearchResult } from './DataInterface'
import logo from '../assets/svelte.png'

export let LogoPath: string = logo;

let searchData: SearchResult[] = [
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

export function SearchPosts(input: string): Promise<SearchResult[]> {
  return new Promise((resolve, reject) => {
    let tempResults: SearchResult[] = [];

    if (input) {
      for (let i = 0; i < searchData.length; i++) {
        if (searchData[i].title.includes(input)) {
          tempResults.push(searchData[i]);
        }
      }
    }

    resolve(tempResults)
  });
}