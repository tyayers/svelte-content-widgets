import type {
  SearchResult,
  Post,
  PostOverview,
  PostOverviewCollection,
  PostComment,
  CommentsCollection,
} from "./DataInterface";
import logo from "../assets/svelte.png";

export let LogoPath: string = logo;

let postData: PostOverviewCollection = {
  "1": {
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
  "2": {
    id: "2",
    title: "I like trees",
    summary: "I like trees, what can I say?",
    author: "test@test.com",
    created: "2018-01-01T00:00:00.000+01:00",
    updated: "",
    upvotes: 0,
    commentCount: 0,
    fileCount: 0,
  },
  "3": {
    id: "3",
    title: "I like bicycles",
    summary: "I like bicycles, what can I say?",
    author: "test@test.com",
    created: "2018-01-01T00:00:00.000+01:00",
    updated: "",
    upvotes: 0,
    commentCount: 0,
    fileCount: 0,
  },
};

let commentsData: CommentsCollection = {
  "1": [
    {
      id: "1",
      authorDisplayName: "testUser",
      created: "2018-01-01T00:00:00.000+01:00",
      updated: "",
      authorId: "123",
      authorProfilePic: "",
      content: "hey, this makes sense!",
      upvotes: 0,
      children: [],
    },
  ],
};

export function SearchPosts(input: string): Promise<SearchResult[]> {
  return new Promise((resolve, reject) => {
    let tempResults: SearchResult[] = [];

    if (input) {
      for (const [key, value] of Object.entries(postData)) {
        if (value && value.title.includes(input)) {
          tempResults.push(value);
        }
      }
    }

    resolve(tempResults);
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

export async function LoadComments(postId: string): Promise<PostComment[]> {
  return new Promise<PostComment[]>((resolve, reject) => {
    if (commentsData[postId]) {
      resolve(commentsData[postId]);
    } else reject("Post not found!");
  });
}
