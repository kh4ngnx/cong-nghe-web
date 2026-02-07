import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly #httpClient = inject(HttpClient);
  readonly #url = 'https://fakestoreapi.com/products';

  getProducts() {
    return this.#httpClient.get<{ id: number; title: string }[]>(this.#url);
  }

  getProductsByID(object: any) {
    const params = new HttpParams({
      fromObject: object,
    });
    return this.#httpClient.get<{ id: number; title: string }[]>(this.#url, {
      params: params,
    });
  }

  post(products: { id: number; title: string }) {
    return this.#httpClient.post<{ id: number; title: string }>(
      this.#url,
      products,
    );
  }

  put(products: { id: number; title: string }) {
    return this.#httpClient.put(this.#url, products);
  }

  delete(id: number) {
    return this.#httpClient.delete(`${this.#url}/${id}`);
  }
}
