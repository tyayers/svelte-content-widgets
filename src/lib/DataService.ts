import type { SearchResult, PostOverview, PostOverviewCollection } from './DataInterface'
import logo from '../assets/svelte.png'

export let LogoPath: string = logo;

let postData: PostOverviewCollection = {
  "1": {
    id: "1",
    title: "I like jelly beans",
    summary: "I like jelly beans, what can I say?",
    author: "test@test.com",
    created: "2022-12-18 11:57:36.023143915 +0100 CET m=+105.309501550",
    updated: "",
    upvotes: 0,
    commentCount: 0,
    fileCount: 0 
  },
  "2": {
    id: "2",
    title: "I like trees",
    summary: "I like trees, what can I say?",
    author: "test@test.com",
    created: "2022-12-18 11:57:36.023143915 +0100 CET m=+105.309501550",
    updated: "",
    upvotes: 0,
    commentCount: 0,
    fileCount: 0 
  },
  "3": {
    id: "3",
    title: "I like bicycles",
    summary: "I like bicycles, what can I say?",
    author: "test@test.com",
    created: "2022-12-18 11:57:36.023143915 +0100 CET m=+105.309501550",
    updated: "",
    upvotes: 0,
    commentCount: 0,
    fileCount: 0 
  }  
}

let searchData: SearchResult[] = [
  {
    id: "1",
    title: "I like jelly beans",
  },
  {
    id: "2",
    title: "I like trees",
  },
  {
    id: "3",
    title: "I like bicylces",
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

export async function LoadPosts(): Promise<PostOverviewCollection> {
  return new Promise<PostOverviewCollection>((resolve, reject) => {
    resolve(postData);
  });
}

export async function LoadPost(postId: string): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    resolve(undefined);
  });
}