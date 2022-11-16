import { Component, OnInit } from '@angular/core';

import { joke, JokesService } from '../jokes.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css'],
})
export class CategorysComponent implements OnInit {
  categories: string[] = [];
  joke: joke | null = null;
  jokes: joke[] = [];
  query: string = '';

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokesService.getCategories().subscribe((category) => {
      this.categories = category;
    });
  }

  categoryClick(category: string) {
    this.jokesService.getRandomJokeByCategory(category).subscribe((joke) => {
      this.joke = joke;
    });
  }
  findJoke(query: string) {
    if (query.length > 2 && query.length < 121) {
      this.jokesService.searchJoke(query).subscribe(({ result }) => {
        this.jokes = result;
        console.log(result);
      });
    }
  }
}
