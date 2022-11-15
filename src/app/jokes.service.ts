import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface joke {
  categories: string[];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value?: string;
}

interface jokeResponse {
  total: number;
  result: joke[];
}

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private httpclient: HttpClient) {}

  getCategories() {
    return this.httpclient.get<string[]>(
      'https://api.chucknorris.io/jokes/categories'
    );
  }
  getRandomJokeByCategory(category: string) {
    return this.httpclient.get<joke>(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  }

  searchJoke(query: string) {
    return this.httpclient.get<jokeResponse>(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
  }
}
