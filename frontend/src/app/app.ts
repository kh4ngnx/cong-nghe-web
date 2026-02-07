import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    CustomPipe,
    ButtonModule,
    TableModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly productsSignal = signal<{ id: number; title: string }[]>([]);
  readonly productsService = inject(ProductsService);
  readonly name = 'Kh4nG';
  readonly products$ = this.productsService.getProducts();

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.productsSignal.set(products);
      },
      error: (err) => {},
    });

    this.productsService
      .getProductsByID({
        key: 'value',
        id: 1,
        method: 'GET',
      })
      .subscribe({
        next: (products) => {
          console.log(products);
        },
        error: (err) => {},
      });
  }
}
