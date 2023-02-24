export type SearchResult = {
  id: string;
  title: string;
};

export type User = {
  email: string;
}

interface DataService {

  Search(input: string): Promise<SearchResult[]>
}
