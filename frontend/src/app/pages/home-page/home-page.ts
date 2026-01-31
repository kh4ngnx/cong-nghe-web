import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  readonly #httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.#httpClient.get('https://fakestoreapi.com/products').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {
        console.log('Fail');
      },
    });
  }
}
